'use client';
import { Children } from 'react';

import styles from './carousel.module.css';

type CarouselProperties = {
  children: JSX.Element | JSX.Element[];
  currentPage: number;
  pageSize: number;
};

export function Carousel({
  children,
  pageSize,
  currentPage,
}: CarouselProperties): JSX.Element {
  const contents = Children.toArray(children);

  const pageDifference = Math.floor(pageSize / 2);
  const contentsToShow: typeof contents = [];
  for (
    let index = currentPage - pageDifference;
    index < currentPage + pageDifference;
    index++
  ) {
    if (contents?.[index] !== undefined) {
      contentsToShow.push(contents[index]);
    }
  }

  return (
    <ul
      className={styles.CarouselContainer}
      style={{
        gridTemplateColumns: `max-content repeat(${pageSize}, 1fr) max-content`,
      }}
    >
      <li>
        <button type="button">{'<-'}</button>
      </li>
      {contentsToShow.map(content => {
        return <li key={JSON.stringify(content)}>{content}</li>;
      })}
      <li>
        <button type="button">{'->'}</button>
      </li>
    </ul>
  );
}
