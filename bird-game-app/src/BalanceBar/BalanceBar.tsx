import React from 'react';
import styles from './BalanceBar.module.css';
import bagIcon from './bag-icon.png';
import coin from '../assets/coin.png'
import vector from './vector.png'
import planet from './planet.png'

const BalanceBar: React.FC = () => {
  return (
    <div className={styles.birdHouse}>
      <div className={styles.scoreContainer}>
        <img src={bagIcon} alt="Bag Icon" className={styles.bagIcon} />
        <img src={coin} className={styles.coin}/>
        <img src={vector} className={styles.vector}/>
        <span className={styles.score}>2500</span>
      </div>
      <img src={planet} className={styles.planet}/>
    </div>
  );
};

export default BalanceBar;
