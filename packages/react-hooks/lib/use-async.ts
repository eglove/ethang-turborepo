import { useCallback, useEffect, useState } from 'react';

type UseAsyncReturn = {
  error: false | Error;
  execute: () => Promise<void>;
  pending: boolean;
  value: false | ResponseInit;
};

export const useAsync = (
  asyncFunction: () => Promise<ResponseInit>,
  immediate = true
): UseAsyncReturn => {
  const [pending, setPending] = useState(false);
  const [value, setValue] = useState<ResponseInit | false>(false);
  const [error, setError] = useState<Error | false>(false);

  const execute = useCallback(async () => {
    setError(false);
    setPending(true);
    setValue(false);

    return asyncFunction()
      .then(response => {
        setValue(response);
      })
      .catch((error_: Error) => {
        setError(error_);
      })
      .finally(() => {
        setPending(false);
      });
  }, [asyncFunction]);

  useEffect(() => {
    if (immediate) {
      execute().catch((error_: Error) => {
        setError(error_);
      });
    }
  }, [execute, immediate]);

  return { error, execute, pending, value };
};
