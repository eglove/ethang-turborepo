import { type SampleList } from '../../../sample-data';

type ShowListProperties = {
  list: SampleList;
};

export function ShowList({ list }: ShowListProperties): JSX.Element {
  return (
    <div>
      <h2>{list.listName}</h2>
      {list.learningItems.map(item => {
        return <div key={item.id}>{item.name}</div>;
      })}
    </div>
  );
}
