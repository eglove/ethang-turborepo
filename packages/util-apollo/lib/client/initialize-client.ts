import type { NormalizedCacheObject } from '@apollo/client';
import {
  ApolloClient,
  ApolloLink,
  from,
  HttpLink,
  InMemoryCache,
} from '@apollo/client';
import { onError } from '@apollo/client/link/error';
import { JSON_HEADER } from 'util-typescript';
import { LocalStorageWrapper, persistCache } from 'apollo3-cache-persist';

export const apolloInitialize = (
  baseUrl: string,
  additionalHeaders?: HeadersInit
): ApolloClient<NormalizedCacheObject> => {
  const getCache = (): InMemoryCache => {
    let initialCache = {};

    if (typeof window !== 'undefined') {
      // @ts-expect-error Check if exists
      initialCache = (window?.__APOLLO_STATE__ as NormalizedCacheObject) ?? {};
    }

    const newCache = new InMemoryCache().restore(initialCache);

    if (typeof window !== 'undefined') {
      persistCache({
        cache: newCache,
        storage: new LocalStorageWrapper(window?.localStorage),
      }).catch(error => {
        console.error(error);
      });
    }

    return newCache;
  };

  const cache = getCache();

  const authLink = new ApolloLink((operation, forward) => {
    operation.setContext(({ headers }: { headers: HeadersInit }) => {
      return {
        headers: {
          ...JSON_HEADER,
          ...additionalHeaders,
          ...headers,
        },
      };
    });

    return forward(operation);
  });

  const errorLink = onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors) {
      for (const graphQLError of graphQLErrors) {
        let errorMessage = `[GraphQL Error]: ${graphQLError.name}:`;

        if (typeof graphQLError.extensions?.code !== 'undefined') {
          errorMessage += `${graphQLError.extensions.code as string} ${
            graphQLError.message
          }`;
        }

        console.error(errorMessage);
      }
    }

    if (networkError) {
      console.error(
        `[Network Error]: ${networkError.name}: ${networkError.message}`
      );
    }
  });

  const httpLink = new HttpLink({
    credentials: 'include',
    uri: baseUrl,
  });

  return new ApolloClient({
    cache,
    link: from([authLink, errorLink, httpLink]),
    ssrForceFetchDelay: 100,
    ssrMode: typeof window === 'undefined',
  });
};
