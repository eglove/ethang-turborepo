import React from 'react';

import type { Monster } from '../../types/monsters';
import { Card } from '../card/card';
import styles from './card-list.module.css';

type CardListProperties = {
  monsters: Monster[];
};

export function CardList({ monsters }: CardListProperties): JSX.Element {
  return (
    <div className={styles.CardList}>
      {monsters.map(monster => {
        return <Card key={monster.id} monster={monster} />;
      })}
    </div>
  );
}
