'use client';
import { useRouter } from 'next/navigation';
import type { ChangeEvent, FormEvent } from 'react';
import { useState } from 'react';

import type { HealthRecord } from '../../lowdb/types';
import { healthRecordPostBody } from '../../lowdb/zod/zod-health-record';
import styles from '../common/form/form.module.css';

type HealthFormProperties = {
  todaysRecord: HealthRecord | undefined;
};

export function HealthForm({
  todaysRecord,
}: HealthFormProperties): JSX.Element {
  const router = useRouter();

  const initialState = {
    age: todaysRecord?.age ?? '',
    height: todaysRecord?.heightIn ?? '',
    weight: todaysRecord?.weightLb ?? '',
  };

  const [formState, setFormState] = useState(initialState);

  const handleOnChange = (event: ChangeEvent<HTMLInputElement>): void => {
    event.preventDefault();

    setFormState(formState_ => {
      return {
        ...formState_,
        [event.target.name]: event.target.value,
      };
    });
  };

  const handleSubmit = async (
    event: FormEvent<HTMLFormElement>
  ): Promise<void> => {
    event.preventDefault();

    const body = JSON.stringify(
      healthRecordPostBody.parse({
        age: Number(formState.age),
        height: Number(formState.height),
        weight: Number(formState.weight),
      })
    );

    await fetch('/api/health-record', {
      body,
      method: 'POST',
    });

    router.refresh();
  };

  return (
    <div>
      <form className={styles.FormContainer} onSubmit={handleSubmit}>
        <label htmlFor="age">
          Age:{' '}
          <input
            name="age"
            type="number"
            value={formState.age}
            onChange={handleOnChange}
          />
        </label>
        <label htmlFor="height">
          Height (in):{' '}
          <input
            name="height"
            type="number"
            value={formState.height}
            onChange={handleOnChange}
          />
        </label>
        <label htmlFor="weight">
          Weight (lbs):{' '}
          <input
            name="weight"
            type="number"
            value={formState.weight}
            onChange={handleOnChange}
          />
        </label>
        <div>BMR: {todaysRecord?.bmr.toFixed(2) ?? ''}</div>
        <button type="submit">Save</button>
      </form>
    </div>
  );
}
