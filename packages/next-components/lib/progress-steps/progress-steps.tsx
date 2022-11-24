import styles from './progress-steps.module.css';

type ProgressStepsProperties = {
  activeLabels: string[];
  primaryColor?: string;
  secondaryColor?: string;
  stepLabels: string[];
};

export function ProgressSteps({
  primaryColor = 'hsl(204deg 70% 53%)',
  secondaryColor = 'hsl(0deg 0% 88%)',
  stepLabels,
  activeLabels,
}: ProgressStepsProperties): JSX.Element {
  let progressWidth =
    ((activeLabels.length - 1) / (stepLabels.length - 1)) * 100;

  if (progressWidth < 0) {
    progressWidth = 0;
  }

  return (
    <div className={styles.Container}>
      <div className={styles.ProgressContainer}>
        <div
          className={styles.Progress}
          style={{ backgroundColor: primaryColor, width: `${progressWidth}%` }}
        />
        {stepLabels.map(label => {
          const isLabelActive = activeLabels.includes(label);

          return (
            <div
              key={label}
              className={`${styles.Circle} ${
                isLabelActive ? styles.Active : ''
              }`}
              style={{
                borderColor: isLabelActive ? primaryColor : secondaryColor,
              }}
            >
              {label}
            </div>
          );
        })}
      </div>
    </div>
  );
}
