import type {
  ApolloClient,
  NormalizedCacheObject,
  ReactiveVar,
} from '@apollo/client';
import { makeVar } from '@apollo/client';
import { isClient } from 'util-typescript';

type ApolloStateProperties = {
  props?: { __APOLLO_STATE__?: Record<string, unknown> };
};

export const addApolloState = (
  client: ApolloClient<NormalizedCacheObject>,
  pageProperties: ApolloStateProperties
): ApolloStateProperties => {
  if (typeof pageProperties.props !== 'undefined') {
    pageProperties.props.__APOLLO_STATE__ = client.cache.extract();
  }

  return pageProperties;
};

const getCleanValueForStorage = (value: unknown): string => {
  return typeof value === 'string' ? value : JSON.stringify(value);
};

export const makeVariablePersisted = <Type>(
  initialValue: Type,
  storageName: string
): ReactiveVar<Type> => {
  if (isClient) {
    let value = initialValue;

    // Try to fetch the value from local storage
    const previousValue = globalThis.localStorage?.getItem(storageName);
    if (previousValue !== null) {
      try {
        value = JSON.parse(previousValue) as Type;
      } catch {
        // It wasn't JSON, assume a valid value
        value = previousValue as unknown as Type;
      }
    }

    // Create a reactive var with stored/initial value
    const reactiveVariable = makeVar<Type>(value);

    const onNextChange = (newValue: Type | undefined): void => {
      try {
        // Try to add the value to local storage
        if (newValue === undefined) {
          globalThis.localStorage?.removeItem(storageName);
        } else {
          globalThis.localStorage?.setItem(
            storageName,
            getCleanValueForStorage(newValue)
          );
        }
      } catch {
        // ignore
      }

      // Re-register for the next change
      reactiveVariable.onNextChange(onNextChange);
    };

    // Register for the first change
    reactiveVariable.onNextChange(onNextChange);

    return reactiveVariable;
  }

  return makeVar<Type>(initialValue);
};
