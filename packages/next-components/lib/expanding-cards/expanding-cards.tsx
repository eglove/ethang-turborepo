'use client';
import { useState } from 'react';

import styles from './expanding-cards.module.css';

type ExpandingCardsProperties = {
  containerProperties?: JSX.IntrinsicElements['div'];
  panelProperties?: JSX.IntrinsicElements['div'];
  panels: Array<{
    content: string | JSX.Element;
    id: string;
    imageUrl: string;
  }>;
};

export function ExpandingCards({
  containerProperties,
  panelProperties,
  panels,
}: ExpandingCardsProperties): JSX.Element {
  const [active, setActive] = useState(panels[0].id);

  const handleClick = (url: string): void => {
    setActive(url);
  };

  return (
    <div className={styles.Container} {...containerProperties}>
      {panels.map(panel => {
        return (
          <div
            key={panel.imageUrl}
            className={`${styles.Panel} ${
              active === panel.id ? styles.Active : ''
            }`}
            style={{
              backgroundImage: `url('${panel.imageUrl}')`,
            }}
            onClick={(): void => {
              handleClick(panel.id);
            }}
            {...panelProperties}
          >
            <div className={styles.Content}>{panel.content}</div>
          </div>
        );
      })}
    </div>
  );
}
