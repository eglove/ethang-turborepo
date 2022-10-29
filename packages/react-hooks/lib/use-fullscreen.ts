import type { MutableRefObject } from 'react';
import { useState } from 'react';
import { isClient } from 'util-typescript';

import { useEventListener } from './use-event-listener';

type UseFullscreenReturn = {
  closeFullScreen: () => void;
  fullScreen: boolean;
  openFullScreen: () => void;
  toggle: () => void;
};

export const useFullscreen = (
  reference: MutableRefObject<HTMLElement>
): UseFullscreenReturn => {
  const initialState = isClient ? Boolean(document.fullscreenElement) : false;
  const [fullScreen, setFullScreen] = useState(initialState);

  const openFullScreen = (): void => {
    reference.current
      .requestFullscreen()
      .catch((requestFullscreenError: Error) => {
        console.error(requestFullscreenError);
      });
  };

  const closeFullScreen = (): void => {
    document.exitFullscreen().catch((exitFullscreenError: Error) => {
      console.error(exitFullscreenError);
    });
  };

  useEventListener('fullscreenchange', () => {
    setFullScreen(document.fullscreenElement === reference.current);
  });

  return {
    closeFullScreen,
    fullScreen,
    openFullScreen,
    toggle: fullScreen ? closeFullScreen : openFullScreen,
  };
};
