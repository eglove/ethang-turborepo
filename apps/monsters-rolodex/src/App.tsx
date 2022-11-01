import './App.css';

import type { ChangeEvent } from 'react';
import React, { useEffect, useState } from 'react';

import type { Monster } from './types/monsters';

export function App(): JSX.Element {
  const [search, setSearch] = useState<string>('');
  let [monsters, setMonsters] = useState<Monster[]>([]);

  if (search !== '') {
    monsters = monsters.filter(monster => {
      return monster.name.toLowerCase().includes(search.toLowerCase());
    });
  }

  useEffect(() => {
    const getMonsters = async (): Promise<void> => {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/users'
      );
      const data = (await response.json()) as unknown as Monster[];
      setMonsters(data);
    };

    getMonsters().catch(error => {
      console.error(error);
    });
  }, []);

  return (
    <div className="App">
      <input
        className="searchBox"
        placeholder="Search Monsters"
        type="search"
        value={search}
        onChange={(event: ChangeEvent<HTMLInputElement>): void => {
          setSearch(event.target.value);
        }}
      />
      {monsters.map(monster => {
        return <h1 key={monster.id}>{monster.name}</h1>;
      })}
    </div>
  );
}

export default App;
