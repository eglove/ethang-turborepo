import { type Dispatch, type SetStateAction } from 'react';

type UseProgressStepsProperties = {
  setActiveLabels: Dispatch<SetStateAction<string[]>>;
  stepLabels: string[];
};

type UseProgressStepsReturn = {
  handleLabelTransition: (direction: 'prev' | 'next') => void;
};

export const useProgressSteps = ({
  stepLabels,
  setActiveLabels,
}: UseProgressStepsProperties): UseProgressStepsReturn => {
  const handleLabelTransition = (direction: 'prev' | 'next'): void => {
    setActiveLabels(activeLabels_ => {
      if (direction === 'next' && activeLabels_.length < stepLabels.length) {
        return stepLabels.slice(0, activeLabels_.length + 1);
      }

      if (direction === 'prev' && activeLabels_.length > 1) {
        return stepLabels.slice(0, activeLabels_.length - 1);
      }

      return activeLabels_;
    });
  };

  return { handleLabelTransition };
};
