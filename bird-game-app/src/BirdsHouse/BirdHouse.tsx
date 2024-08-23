import React from 'react';
import styles from './BirdHouse.module.css';
import BirdNest from './BirdNest';
import BalanceBar from '../BalanceBar/BalanceBar';
import NavBar from '../NavBar/NavBar';
import mockBirdData from '../mock';

const BirdHouse: React.FC = () => {
  const chunkArray = (array: any[], size: number) => {
    const result = [];
    for (let i = 0; i < array.length; i += size) {
      result.push(array.slice(i, i + size));
    }
    if (result.length > 0) {
      const lastRow = result[result.length - 1];
      while (lastRow.length < size) {
        lastRow.push({ id: `placeholder-${lastRow.length}`, bird: '', progress: 0 });
      }
    }
    return result;
  };
  const nestRows = chunkArray(mockBirdData, 3);

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
                bird={birdData.bird as any}
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
