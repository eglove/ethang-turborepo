'use client';

import Link from 'next/link';
import { type ChangeEvent, useRef, useState } from 'react';

import styles from './card-stack.module.css';

export function CardStack(): JSX.Element {
  const CardStackReference = useRef<HTMLDivElement>(null);

  const [selectedTransform, setSelectedTransform] = useState('mode-center');
  const [gapValue, setGapValue] = useState('5');

  const setCardTransformOrigins = (value: string): void => {
    if (CardStackReference.current !== null) {
      for (
        let index = 0;
        index < CardStackReference.current.children.length;
        index++
      ) {
        const element = CardStackReference.current.children.item(
          index
        ) as HTMLDivElement;
        element.style.setProperty('transform-origin', value);
      }
    }
  };

  const handleTransformChange = (
    event: ChangeEvent<HTMLInputElement>
  ): void => {
    if (event.target.checked) {
      switch (event.target.value) {
        case 'mode-bottom-center': {
          setCardTransformOrigins('bottom center');
          break;
        }

        case 'mode-bottom-left': {
          setCardTransformOrigins('bottom left');
          break;
        }

        case 'mode-top-left': {
          setCardTransformOrigins('top left');
          break;
        }

        case 'mode-top-right': {
          setCardTransformOrigins('top right');
          break;
        }

        case 'mode-bottom-right': {
          setCardTransformOrigins('bottom right');
          break;
        }

        case 'mode-better-bottom-center': {
          setCardTransformOrigins('center 200%');
          break;
        }

        case 'mode-better-top-left': {
          setCardTransformOrigins('-25% -25%');
          break;
        }

        default: {
          setCardTransformOrigins('center');
        }
      }

      setSelectedTransform(event.target.value);
    }
  };

  const handleGapValueChange = (event: ChangeEvent<HTMLInputElement>): void => {
    if (CardStackReference.current !== null) {
      CardStackReference.current.style.setProperty(
        '--scalar',
        event.target.value
      );
    }

    setGapValue(event.target.value);
  };

  return (
    <div>
      <h2>Card Stack</h2>
      <p>
        <Link href="https://github.com/eglove/ethang-turborepo/tree/main/apps/website/app/portfolio/components/card-stack">
          Source
        </Link>
      </p>
      <div className={styles.Container}>
        <form className={styles.Form}>
          <fieldset className={styles.Fieldset}>
            <legend>Transform Origin</legend>
            <input
              checked={selectedTransform === 'mode-center'}
              id="mode-center"
              name="stack-type"
              type="radio"
              value="mode-center"
              onChange={handleTransformChange}
            />
            <label htmlFor="mode-center">center</label>
            <input
              checked={selectedTransform === 'mode-bottom-center'}
              id="mode-bottom-center"
              name="stack-type"
              type="radio"
              value="mode-bottom-center"
              onChange={handleTransformChange}
            />
            <label htmlFor="mode-bottom-center">bottom center</label>
            <input
              checked={selectedTransform === 'mode-bottom-left'}
              id="mode-bottom-left"
              name="stack-type"
              type="radio"
              value="mode-bottom-left"
              onChange={handleTransformChange}
            />
            <label htmlFor="mode-bottom-left">bottom left</label>
            <input
              checked={selectedTransform === 'mode-top-left'}
              id="mode-top-left"
              name="stack-type"
              type="radio"
              value="mode-top-left"
              onChange={handleTransformChange}
            />
            <label htmlFor="mode-top-left">top left</label>
            <input
              checked={selectedTransform === 'mode-top-right'}
              id="mode-top-right"
              name="stack-type"
              type="radio"
              value="mode-top-right"
              onChange={handleTransformChange}
            />
            <label htmlFor="mode-top-right">top right</label>
            <input
              checked={selectedTransform === 'mode-bottom-right'}
              id="mode-bottom-right"
              name="stack-type"
              type="radio"
              value="mode-bottom-right"
              onChange={handleTransformChange}
            />
            <label htmlFor="mode-bottom-right">bottom right</label>
          </fieldset>
          <fieldset>
            <legend>Custom</legend>
            <input
              id="mode-better-bottom-center"
              name="stack-type"
              type="radio"
              value="mode-better-bottom-center"
              onChange={handleTransformChange}
            />
            <label htmlFor="mode-better-bottom-center">center 200%</label>
            <input
              id="mode-better-top-left"
              name="stack-type"
              type="radio"
              value="mode-better-top-left"
              onChange={handleTransformChange}
            />
            <label htmlFor="mode-better-top-left">-25% -25%</label>
          </fieldset>
          <fieldset>
            <legend>Gap</legend>
            <input
              id="slider"
              max="20"
              min="0"
              type="range"
              value={gapValue}
              onChange={handleGapValueChange}
            />
          </fieldset>
        </form>
        <div className={styles.CardStack} ref={CardStackReference}>
          <div className={styles.Card} />
          <div className={styles.Card} />
          <div className={styles.Card} />
          <div className={styles.Card} />
          <div className={styles.Card} />
        </div>
      </div>
    </div>
  );
}
