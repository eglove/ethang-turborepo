import { type SampleList, sampleData } from '../../../../../sample-data';
import { ShowList } from '../../../../components/learning-list/show-list';

type ListIdProperties = { params: { listName: string; user: string } };

export default function ListId({
  params,
}: ListIdProperties): JSX.Element | null {
  const sampleList: SampleList | undefined = sampleData.users
    .find(user => {
      return user.username === params.user;
    })
    ?.lists.find(list => {
      return list.listName === params.listName;
    });

  if (typeof sampleList === 'undefined') {
    return null;
  }

  return <ShowList list={sampleList} />;
}
