'use client';
import React from 'react';
import LiteYouTubeEmbed from 'react-lite-youtube-embed';

type YoutubeEmbedProperties = {
  id: string;
  title: string;
};

export function YoutubeEmbed({
  id,
  title,
}: YoutubeEmbedProperties): JSX.Element {
  return (
    <div style={{ margin: '16px 0' }}>
      <LiteYouTubeEmbed id={id} title={title} />
    </div>
  );
}
