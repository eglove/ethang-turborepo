'use client';
import { ProgressSteps } from 'next-components';
import { useState } from 'react';
import { useAnimationInterval } from 'react-hooks';

export function ProgressStepsDemo(): JSX.Element {
  const [activeLabels, setActiveLabels] = useState<string[]>([]);

  useAnimationInterval(1000, () => {
    switch (activeLabels.length) {
      case 0: {
        setActiveLabels(['1']);
        break;
      }

      case 1: {
        setActiveLabels(['1', '2']);
        break;
      }

      case 2: {
        setActiveLabels(['1', '2', '3']);
        break;
      }

      case 3: {
        setActiveLabels(['1', '2', '3', '4']);
        break;
      }

      default: {
        setActiveLabels([]);
      }
    }
  });

  return (
    <div>
      <h2>Progress Steps</h2>
      <ProgressSteps
        activeLabels={activeLabels}
        stepLabels={['1', '2', '3', '4']}
      />
    </div>
  );
}
