import { delay } from './util';

export const revalidate = 0;

export default async function Messages(): Promise<JSX.Element> {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  await delay(10_000, () => {});
  const initialServerMessages = [
    'Hey dude',
    'Wanna hear a good quote?',
    `"How can you trust a man that wears both a belt and suspenders? Man can't even trust his own pants." -Frank`,
    'bars amitire?',
  ];

  return (
    <div>
      <ul>
        {initialServerMessages.map(message => {
          return <li key={message}>{message}</li>;
        })}
      </ul>
      <div>Send Message:</div>
      <input type="text" />
    </div>
  );
}
