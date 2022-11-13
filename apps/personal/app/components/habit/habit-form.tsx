'use client';
import ms from 'ms';
import { useRouter } from 'next/navigation';
import type { ChangeEvent, FormEvent } from 'react';
import { useState } from 'react';

import { habitPostBody } from '../../lowdb/zod/zod-health-record';
import styles from '../common/form/form.module.css';

export function HabitForm(): JSX.Element {
  const router = useRouter();

  const initialState = {
    name: '',
    recurs: '',
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
      habitPostBody.parse({
        name: formState.name,
        recurs: ms(formState.recurs),
      })
    );

    await fetch('/api/habit', {
      body,
      method: 'POST',
    });

    router.refresh();
  };

  return (
    <form className={styles.FormContainer} onSubmit={handleSubmit}>
      <label htmlFor="name">
        Name:{' '}
        <input
          name="name"
          type="text"
          value={formState.name}
          onChange={handleInputChange}
        />
      </label>
      <label htmlFor="recurs">
        Recurs (ms string):{' '}
        <input
          name="recurs"
          type="string"
          value={formState.recurs}
          onChange={handleInputChange}
        />
      </label>
      <button type="submit">Add</button>
    </form>
  );
}
