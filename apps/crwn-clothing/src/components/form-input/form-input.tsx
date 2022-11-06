import styles from './form-input.module.css';

type FormInputProperties = {
  inputProperties: JSX.IntrinsicElements['input'];
  label: string;
  labelProperties?: JSX.IntrinsicElements['label'];
};

export function FormInput({
  label,
  labelProperties,
  inputProperties,
}: FormInputProperties): JSX.Element {
  return (
    <div className={styles.Group}>
      <label
        htmlFor={inputProperties.name}
        className={`${
          String(inputProperties.value)?.length > 0 ? styles.Shrink : ''
        } ${styles.FormInputLabel}`}
        {...labelProperties}
      >
        {label}
      </label>
      <input
        aria-label={inputProperties.name}
        className={styles.FormInput}
        {...inputProperties}
      />
    </div>
  );
}
