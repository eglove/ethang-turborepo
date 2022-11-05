'use client';
import './gist-embed.css';

type ReactGistProperties = {
  id: string;
  username?: string;
};

export function GistEmbed({
  id,
  username = 'eglove',
}: ReactGistProperties): JSX.Element {
  return (
    <script
      className="hello"
      src={`https://gist.github.com/${username}/${id}.js`}
    />
  );
}
