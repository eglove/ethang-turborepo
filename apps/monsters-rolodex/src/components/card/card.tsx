import React from 'react';

import type { Monster } from '../../types/monsters';
import styles from './card.module.css';

type CardProperties = {
  monster: Monster;
};

export function Card({ monster }: CardProperties): JSX.Element {
  const { id, name, email } = monster;

  return (
    <div className={styles.CardContainer} key={id}>
      <img
        alt={`Monster ${name}`}
        src={`https://robohash.org/${id}?set2&size=180x180`}
      />
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );
}
