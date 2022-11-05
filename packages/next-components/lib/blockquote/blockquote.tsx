import React from 'react';

import type { NextLinkProperties } from '../next-link/next-link';
import { NextLink } from '../next-link/next-link';

type BlockquoteProperties = {
  citationText: string;
  citationUrl?: string;
  htmlProperties?: {
    blockquote?: JSX.IntrinsicElements['blockquote'];
    cite?: JSX.IntrinsicElements['cite'];
    figcaption?: JSX.IntrinsicElements['figcaption'];
    figure?: JSX.IntrinsicElements['figure'];
    link?: NextLinkProperties;
  };
  quote: string;
};

export function Blockquote({
  quote,
  citationText,
  citationUrl,
  htmlProperties,
}: BlockquoteProperties): JSX.Element {
  return (
    <figure {...htmlProperties?.figure}>
      <blockquote {...htmlProperties?.blockquote}>{quote}</blockquote>
      <figcaption {...htmlProperties?.figcaption}>
        <cite {...htmlProperties?.cite}>
          &mdash;{' '}
          {typeof citationUrl === 'undefined' ? (
            citationText
          ) : (
            <NextLink
              linkProperties={{ href: citationUrl }}
              {...htmlProperties?.link}
            >
              {citationText}
            </NextLink>
          )}
        </cite>
      </figcaption>
    </figure>
  );
}
