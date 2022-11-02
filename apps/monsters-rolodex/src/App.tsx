import './App.css';

import React, { useEffect, useState } from 'react';

import { CardList } from './components/card-list/card-list';
import { SearchBar } from './components/search-bar/search-bar';
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
      <SearchBar
        inputProperties={{ className: 'searchBox' }}
        search={search}
        setSearch={setSearch}
      />
      <CardList monsters={monsters} />
    </div>
  );
}

export default App;
