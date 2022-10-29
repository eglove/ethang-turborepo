import { useEffect, useState } from 'react';
import { animationInterval } from 'util-typescript';

type UseCopyClipboardReturn = {
  copyToClipboard: (text: string) => void;
  error?: Error;
  isCopied: boolean;
};

export const useCopyClipboard = (
  successDuration = 2000
): UseCopyClipboardReturn => {
  const [isCopied, setIsCopied] = useState(false);
  const [error, setError] = useState<Error>();

  const copyToClipboard = (text: string): void => {
    const asyncCopy = async (): Promise<void> => {
      navigator.clipboard
        .writeText(text)
        .then(() => {
          setIsCopied(true);
          return null;
        })
        .catch((writeTextError: Error) => {
          setError(writeTextError);
          setIsCopied(false);
        });
    };

    asyncCopy().catch((asyncError: Error) => {
      setError(asyncError);
      setIsCopied(false);
    });
  };

  useEffect(() => {
    const controller = new AbortController();

    if (isCopied) {
      animationInterval(successDuration, controller.signal, () => {
        setIsCopied(false);
      });
    }

    return (): void => {
      controller.abort();
    };
  }, [isCopied, successDuration]);

  return { copyToClipboard, error, isCopied };
};
