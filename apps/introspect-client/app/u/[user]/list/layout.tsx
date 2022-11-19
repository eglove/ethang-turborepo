import { type ReactNode } from 'react';

import {
  type SampleList,
  type SampleUser,
  sampleData,
} from '../../../../sample-data';
import { ListNavigation } from '../../../components/learning-list/list-navigation';
import styles from './page.module.css';

type ListsProperties = {
  children: ReactNode;
  params: {
    user: string;
  };
};

export default function List({
  children,
  params,
}: ListsProperties): JSX.Element {
  const user = sampleData.users.find(user => {
    return user.username === params.user;
  }) as unknown as SampleUser;

  const listItems: SampleList[] = user?.lists ?? [];

  return (
    <div className={styles.ListPageContainer}>
      <div>
        <h2>My Learning</h2>
        <ListNavigation listItems={listItems} username={user.username} />
      </div>
      <div>{children}</div>
    </div>
  );
}
