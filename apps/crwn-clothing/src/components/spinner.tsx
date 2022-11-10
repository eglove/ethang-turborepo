import styles from './spinner.module.css';

export function Spinner(): JSX.Element {
  return (
    <div className={styles.SpinnerOverlay}>
      <div className={styles.SpinnerContainer} />
    </div>
  );
}
