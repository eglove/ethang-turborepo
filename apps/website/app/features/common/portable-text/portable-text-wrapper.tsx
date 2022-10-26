import { toHTML } from '@portabletext/to-html';
import type { TypedObject } from '@portabletext/types';
import React from 'react';

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
    link(properties: Link): string {
      return `<a href="${properties.value.href}">${properties.text}</a>`;
    },
  },
  types: {
    code(properties: { value: { code: string; language: string } }): string {
      return `<pre class=language-${properties.value.language}><code>${properties.value.code}</code></pre>`;
    },
    gist(properties: { value: { id: string } }): string {
      return `<iframe frameborder=0
        style="min-width: 200px; width: 100%; height: 600px; margin: auto;"
        srcdoc='<html><body><style type="text/css">.gist .gist-data { width: 100%; height: 500px; margin: auto; }</style><script src="https://gist.github.com/${properties.value.id}.js"></script></body></html>'
        ></iframe>`;
    },
    imageEmbed(properties: ImageEmbed): string {
      return `<div
          style="display: grid; height: ${properties.value.image.image.asset.metadata.dimensions.height}; place-items: center;">
          <img
            alt="${properties.value.image.description}"
            src="${properties.value.image.image.asset.url}"
            width="80%"
            height="auto"
          />
        </div>`;
    },
    youtubeId(properties: YouTubeEmbed): string {
      return `<div style="display: grid; place-items: center; margin-bottom: 16px">
          <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/${properties.value.id}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
        `;
    },
  },
};

export function PortableTextWrapper({
  value,
}: {
  value: TypedObject[];
}): JSX.Element {
  // @ts-expect-error custom components
  const html = toHTML(value, { components: portableTextComponents });

  // eslint-disable-next-line react/no-danger
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}
