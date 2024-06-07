import React from 'react';
import { getStyles } from './TempRedesign.styles';

export const TempRedesign = () => {
  const styles = getStyles();
  return (
    <ol className={styles.orderedList}>
      {/* <div>Icon</div> */}
      <li className={styles.listItem}>
        <span className={styles.listItemContent}>1</span>
        <p className={styles.label}>Test label</p>
      </li>
      <li className={styles.listItem}>
        <span className={styles.listItemContent}>2</span>
        <p className={styles.label}>Test label</p>
      </li>
      <li className={styles.listItem}>
        <span className={styles.listItemContent}>3</span>
        <p className={styles.label}>Test label</p>
      </li>
      <li className={styles.listItem}>
        <span className={styles.listItemContent}>4</span>
        <p className={styles.label}>Test label looong one!! yes long name</p>
      </li>
      <li className={styles.listItem}>
        <span className={styles.listItemContent}>5</span>
        {/* <p className={styles.label}>Test label</p> */}
      </li>
    </ol>
  );
};
