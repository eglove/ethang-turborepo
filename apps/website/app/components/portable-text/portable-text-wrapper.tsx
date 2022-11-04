'use client';
import { PortableText } from '@portabletext/react';
import type { TypedObject } from '@portabletext/types';
import { NextLink, SanityNextImage } from 'next-components';
import React from 'react';
import { GistEmbed } from 'react-components';
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { a11yLight } from 'react-syntax-highlighter/dist/cjs/styles/hljs';

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
        <SyntaxHighlighter
          wrapLongLines
          language={properties.value.language}
          style={a11yLight}
        >
          {properties.value.code}
        </SyntaxHighlighter>
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
        <figure>
          <blockquote>{properties.value.quote}</blockquote>
          <figcaption>
            <cite>
              &mdash;{' '}
              {typeof properties.value.citationUrl === 'undefined' ? (
                properties.value.citationText
              ) : (
                <NextLink
                  linkProperties={{ href: properties.value.citationUrl }}
                >
                  {properties.value.citationText}
                </NextLink>
              )}
            </cite>
          </figcaption>
        </figure>
      );
    },
    youtubeId(properties: YouTubeEmbed): JSX.Element {
      return (
        <div style={{ margin: '16px 0' }}>
          <LiteYouTubeEmbed
            id={properties.value.id}
            title={properties.value.title}
          />
        </div>
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
