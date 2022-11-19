import { sampleData } from '../../../sample-data';

export default function User(): JSX.Element {
  const user = sampleData.users[0];

  return (
    <div>
      <p>{user.username}</p>
    </div>
  );
}
