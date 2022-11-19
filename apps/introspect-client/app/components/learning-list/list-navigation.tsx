'use client';
import { useRouter } from 'next/navigation';

import { type SampleList } from '../../../sample-data';

type ListNavigationProperties = {
  listItems: SampleList[];
  username: string;
};

export function ListNavigation({
  listItems,
  username,
}: ListNavigationProperties): JSX.Element {
  const router = useRouter();

  const handleNavigateToList = (listName: string): void => {
    const navigateTo = `/u/${username}/list/${listName}`;

    router.push(navigateTo.toString());
  };

  return (
    <ul>
      {listItems?.map(item => {
        return (
          <li
            key={item.id}
            onClick={(): void => {
              handleNavigateToList(item.listName);
            }}
          >
            {item.listName}
          </li>
        );
      })}
    </ul>
  );
}
