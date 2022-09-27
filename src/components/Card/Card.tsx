import React, { useState } from 'react';

import styles from './Card.module.scss';

type Props = {};

export const Card = (props: Props) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className={[styles.Card, isFlipped ? styles.flipped : ''].join(' ')}
      onClick={() => setIsFlipped((prev) => !prev)}
    >
      <div className={styles.wrapper}>
        <div className={styles.sideA}>side a</div>
        <div className={styles.sideB}>side b</div>
      </div>
    </div>
  );
};
