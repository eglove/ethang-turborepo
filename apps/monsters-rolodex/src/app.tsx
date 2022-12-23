import { useEffect, useState } from 'react';

import styles from './app.module.css';
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
      <h1 className={styles.AppTitle}>Monsters Rolodex</h1>
      <SearchBar search={search} setSearch={setSearch} />
      <CardList monsters={monsters} />
    </div>
  );
}

export default App;
