import { VisuallyHidden } from '../visually-hidden/visually-hidden';
import styles from './progress-bar.module.css';

type SizeType = {
  borderRadius: number;
  height: number;
  padding: number;
};

const SIZES: Record<string, SizeType> = {
  large: {
    borderRadius: 8,
    height: 16,
    padding: 4,
  },
  medium: {
    borderRadius: 4,
    height: 12,
    padding: 0,
  },
  small: {
    borderRadius: 4,
    height: 8,
    padding: 0,
  },
};

type ProgressBarProperties = {
  size: keyof typeof SIZES;
  value: number;
};

export function ProgressBar({
  size,
  value,
}: ProgressBarProperties): JSX.Element {
  const { borderRadius, padding, height } = SIZES[size];
  const progress = value > 100 ? 100 : value;

  return (
    <div
      aria-valuemax={100}
      aria-valuemin={0}
      aria-valuenow={progress}
      className={styles.ProgressBarContainer}
      role="progressbar"
      style={{ borderRadius: `${borderRadius}px`, padding: `${padding}px` }}
    >
      <VisuallyHidden>{`${progress}%`}</VisuallyHidden>
      <div
        className={styles.Bar}
        style={{
          height: `${height}px`,
          width: `${progress}%`,
        }}
      />
    </div>
  );
}
