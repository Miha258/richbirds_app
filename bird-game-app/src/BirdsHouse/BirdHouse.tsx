import React from 'react';
import styles from './BirdHouse.module.css';
import BirdNest from './BirdNest';
import BalanceBar from '../BalanceBar/BalanceBar';
import NavBar from '../NavBar/NavBar';
import mockBirdData from '../mock';

const BirdHouse: React.FC = () => {
  const MAX_BIRDS = 9;
  const filledBirdData = [...mockBirdData];
  while (filledBirdData.length < MAX_BIRDS) {
    filledBirdData.push({ id: filledBirdData.length + 1, bird: '', progress: 0 });
  }

  const chunkArray = (array: any[], size: number) => {
    const result = [];
    for (let i = 0; i < array.length; i += size) {
      result.push(array.slice(i, i + size));
    }
    return result;
  };

  const nestRows = chunkArray(filledBirdData, 3);

  return (
    <div>
      <BalanceBar />
      <div className={styles.nestList}>
        {nestRows.map((row, rowIndex) => (
          <div className={styles.nestRow} key={rowIndex}>
            {row.map((birdData) => (
              <BirdNest
                key={birdData.id}
                id={birdData.id}
                bird={birdData.bird}
                progress={birdData.progress}
              />
            ))}
          </div>
        ))}
      </div>
      <NavBar />
    </div>
  );
};

export default BirdHouse;
