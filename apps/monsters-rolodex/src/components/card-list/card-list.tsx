import React from 'react';

import type { Monster } from '../../types/monsters';

type CardListProperties = {
  monsters: Monster[];
};

export function CardList({ monsters }: CardListProperties): JSX.Element {
  return (
    <div>
      {monsters.map(monster => {
        return <h1 key={monster.id}>{monster.name}</h1>;
      })}
    </div>
  );
}
