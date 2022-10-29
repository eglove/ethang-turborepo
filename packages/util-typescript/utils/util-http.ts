export enum HTTP_METHOD {
  DELETE = 'DELETE',
  GET = 'GET',
  PATCH = 'PATCH',
  POST = 'POST',
  PUT = 'PUT',
}

export const JSON_HEADER = { 'Content-Type': 'application/json' };

export const fetcher = async <ResponseType>(
  ...arguments_: [input: RequestInfo, init?: RequestInit]
): Promise<ResponseType> => {
  return fetch(...arguments_).then(async response => {
    return (await response.json()) as ResponseType;
  });
};

export const isBrowser = typeof window !== 'undefined';

export const isClient = Boolean(
  typeof window !== 'undefined' && window.document
);

export const locationOrigin = (): string => {
  if (typeof globalThis !== 'undefined') {
    return globalThis.location.origin;
  }

  return 'localhost';
};

export const isLocalhost = (): boolean => {
  if (typeof globalThis !== 'undefined') {
    return globalThis.origin.includes('localhost');
  }

  return false;
};

export const removeQueryParameters = (): void => {
  if (typeof globalThis !== 'undefined') {
    globalThis.history.replaceState(
      undefined,
      '',
      globalThis.location.pathname
    );
  }
};

export const successfullySettledPromises = async <Type>(
  promises: Array<Promise<Type>>
): Promise<Type[]> => {
  const data = await Promise.allSettled(promises);

  const returnData: Type[] = [];

  for (const promise of data) {
    if (promise.status === 'fulfilled') {
      returnData.push(promise.value);
    }
  }

  return returnData;
};

// For use with swr package.
export const swrFetcher = async <Type>(
  ...arguments_: unknown[]
): Promise<Type> => {
  // @ts-expect-error Using SWR documentation https://github.com/vercel/swr/blob/master/examples/api-hooks/libs/fetch.js
  const response = await fetch(...arguments_);
  return (await response.json()) as Type;
};
