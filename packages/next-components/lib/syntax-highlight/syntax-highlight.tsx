'use client';
import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { a11yLight } from 'react-syntax-highlighter/dist/cjs/styles/hljs';

type SyntaxHighlightProperties = {
  code: string;
  language?: string;
};

export function SyntaxHighlight({
  code,
  language,
}: SyntaxHighlightProperties): JSX.Element {
  return (
    <SyntaxHighlighter wrapLongLines language={language} style={a11yLight}>
      {code}
    </SyntaxHighlighter>
  );
}
