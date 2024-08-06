import React from 'react';
import styles from './BirdHouse.module.css';
import BirdNest from './BirdNest';
import MenuBar from '../BirdsMenu/MenuBar';

const BirdHouse: React.FC = () => {
  return (
    <div>
      <MenuBar/>
      <div className={styles.nestList}>
        <div className={styles.nestRow}>
          <BirdNest />
          <BirdNest />
          <BirdNest />
        </div>
        <div className={styles.nestRow}>
          <BirdNest />
          <BirdNest />
          <BirdNest />
        </div>
        <div className={styles.nestRow}>
          <BirdNest />
          <BirdNest />
          <BirdNest />
        </div>
      </div>
    </div>
  );
};

export default BirdHouse;
