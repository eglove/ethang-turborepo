import type {
  ChangeEvent,
  DetailedHTMLProps,
  Dispatch,
  InputHTMLAttributes,
  SetStateAction,
} from 'react';

import styles from './search-bar.module.css';

type SearchBarProperties = {
  inputProperties?: DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >;
  search: string;
  setSearch: Dispatch<SetStateAction<string>>;
};

export function SearchBar({
  inputProperties,
  search,
  setSearch,
}: SearchBarProperties): JSX.Element {
  return (
    <input
      placeholder="Search Monsters"
      type="search"
      value={search}
      onChange={(event: ChangeEvent<HTMLInputElement>): void => {
        setSearch(event.target.value);
      }}
      {...inputProperties}
      className={`${styles.SearchBar} ${inputProperties?.className ?? ''}`}
    />
  );
}
