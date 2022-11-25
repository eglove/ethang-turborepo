'use client';
import Link from 'next/link';
import { useState } from 'react';
import { Button, ProgressBar } from 'react-components';
import { useAnimationInterval } from 'react-hooks';

import styles from './progress-bar-demo.module.css';

export function ProgressBarDemo(): JSX.Element {
  const [value, setValue] = useState(0);
  const [size, setSize] = useState('large');

  useAnimationInterval(500, () => {
    if (value >= 100) {
      setValue(0);
    } else {
      setValue(value_ => {
        return value_ + 10;
      });
    }
  });

  return (
    <div>
      <h2>Progress Bar</h2>
      <p>
        <Link href="https://github.com/eglove/ethang-turborepo/tree/main/packages/react-components/lib/progress-bar">
          Source
        </Link>
      </p>
      <div className={styles.OptionContainer}>
        <Button
          size="small"
          text="Small"
          variant={size === 'small' ? 'Fill' : 'Outline'}
          buttonProperties={{
            onClick(): void {
              setSize('small');
            },
          }}
        />
        <Button
          size="small"
          text="Medium"
          variant={size === 'medium' ? 'Fill' : 'Outline'}
          buttonProperties={{
            onClick(): void {
              setSize('medium');
            },
          }}
        />
        <Button
          size="small"
          text="Large"
          variant={size === 'large' ? 'Fill' : 'Outline'}
          buttonProperties={{
            onClick(): void {
              setSize('large');
            },
          }}
        />
      </div>
      <ProgressBar size={size} value={value} />
    </div>
  );
}
