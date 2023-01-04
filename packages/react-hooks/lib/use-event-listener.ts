import { useEffect, useRef } from 'react';

export type UseEventListenerOptions = {
  addEventListenerOptions?: boolean | AddEventListenerOptions;
  removeEventListenerOptions?: boolean | EventListenerOptions;
};

type WindowEventMapPlus = WindowEventMap & Record<string, unknown>;

export const useEventListener = <Type extends keyof WindowEventMapPlus>(
  type: Type,
  listener: Type extends keyof WindowEventMap
    ? (this: Window, event_: WindowEventMap[Type]) => unknown
    : EventListenerOrEventListenerObject,
  options?: UseEventListenerOptions,
): void => {
  const savedHandler = useRef(listener);

  useEffect(() => {
    savedHandler.current = listener;
  }, [listener]);

  useEffect(() => {
    const eventListener = savedHandler.current;

    window.addEventListener(
      type,
      eventListener,
      options?.addEventListenerOptions,
    );

    return (): void => {
      window.removeEventListener(
        type,
        eventListener,
        options?.removeEventListenerOptions,
      );
    };
  }, [
    options?.addEventListenerOptions,
    options?.removeEventListenerOptions,
    type,
  ]);
};
