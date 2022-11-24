'use client';
import Link from 'next/link';
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
      <p>
        <Link href="https://github.com/eglove/ethang-turborepo/tree/main/packages/next-components/lib/progress-steps">
          Source
        </Link>
      </p>
      <ProgressSteps
        activeLabels={activeLabels}
        stepLabels={['1', '2', '3', '4']}
      />
    </div>
  );
}
