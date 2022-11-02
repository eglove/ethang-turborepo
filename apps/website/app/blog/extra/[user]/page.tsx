import { Container } from '../../../components';
import Messages from './messages';
import { delay } from './util';

const getUser = (id: string): { name: string } => {
  console.info(id);
  return { name: 'John' };
};

// eslint-disable-next-line unicorn/prevent-abbreviations
export async function generateStaticParams(): Promise<Array<{ user: string }>> {
  const users = ['userOne', 'userTwo', 'userThree'];

  return users.map(user => {
    return {
      user,
    };
  });
}

export default async function UserDemo({
  params,
}: {
  params: { user: string };
}): Promise<JSX.Element> {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  await delay(10_000, () => {});
  const john = getUser(params.user);

  return (
    <Container>
      <p>Hi, {john.name}</p>
      {/* @ts-expect-error shut up next */}
      <Messages />
    </Container>
  );
}
