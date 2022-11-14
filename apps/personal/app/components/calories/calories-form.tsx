'use client';
import { useRouter } from 'next/navigation';
import type { ChangeEvent, FormEvent } from 'react';
import { useState } from 'react';

import { caloriePostBody } from '../../lowdb/zod/zod-health-record';
import styles from '../common/form/form.module.css';

export function CaloriesForm(): JSX.Element {
  const router = useRouter();

  const initialState = {
    calories: '',
  };

  const [formState, setFormState] = useState(initialState);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>): void => {
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
      caloriePostBody.parse({
        calories: Number(formState.calories),
      })
    );

    await fetch('/api/calories', {
      body,
      method: 'POST',
    });

    setFormState({ calories: '' });

    router.refresh();
  };

  return (
    <form className={styles.FormContainer} onSubmit={handleSubmit}>
      <label htmlFor="calories">
        Add Calories:{' '}
        <input
          name="calories"
          type="number"
          value={formState.calories}
          onChange={handleInputChange}
        />
        <br />
        <button type="submit">Add</button>
      </label>
    </form>
  );
}
