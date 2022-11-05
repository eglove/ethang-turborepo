import { PortableText } from '@portabletext/react';
import type { TypedObject } from '@portabletext/types';
import { Blockquote, NextLink, SanityNextImage } from 'next-components';
import { SyntaxHighlight } from 'next-components/lib/syntax-highlighter/syntax-highlighter';
import { YoutubeEmbed } from 'next-components/lib/youtube-embed/youtube-embed';
import React from 'react';
import { GistEmbed } from 'react-components';

type ImageEmbed = {
  index: number;
  isInline: boolean;
  value: {
    _key: string;
    _type: string;
    image: {
      description: string;
      image: {
        asset: {
          metadata: {
            dimensions: {
              height: number;
              width: number;
            };
          };
          url: string;
        };
      };
    };
  };
};

type Link = {
  children: string[];
  markKey: string;
  markType: string;
  text: string;
  value: {
    _key: string;
    _type: string;
    href: string;
  };
};

type YouTubeEmbed = {
  index: number;
  isInline: boolean;
  value: {
    _key: string;
    _type: string;
    id: string;
    title: string;
  };
};

export const portableTextComponents = {
  marks: {
    link(properties: Link): JSX.Element {
      return (
        <NextLink linkProperties={{ href: properties.value.href }}>
          {properties.text}
        </NextLink>
      );
    },
  },
  types: {
    code(properties: {
      value: { code: string; language: string };
    }): JSX.Element {
      return (
        <SyntaxHighlight
          code={properties.value.code}
          language={properties.value.language}
        />
      );
    },
    gist(properties: { value: { id: string } }): JSX.Element {
      return <GistEmbed id={properties.value.id} />;
    },
    imageEmbed(properties: ImageEmbed): JSX.Element {
      return (
        <div
          style={{
            margin: 'auto',
            maxWidth: '500px',
          }}
        >
          <SanityNextImage
            altText={properties.value.image.description}
            image={properties.value.image.image}
          />
        </div>
      );
    },
    quote(properties: {
      value: { citationText: string; citationUrl: string; quote: string };
    }): JSX.Element {
      return (
        <Blockquote
          citationText={properties.value.citationText}
          citationUrl={properties.value.citationUrl}
          quote={properties.value.quote}
        />
      );
    },
    youtubeId(properties: YouTubeEmbed): JSX.Element {
      return (
        <YoutubeEmbed id={properties.value.id} title={properties.value.title} />
      );
    },
  },
};

export default function PortableTextWrapper({
  value,
}: {
  value: TypedObject[];
}): JSX.Element {
  // @ts-expect-error custom components
  return <PortableText components={portableTextComponents} value={value} />;
}
