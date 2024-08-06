import React from 'react';
import styles from './BirdHouse.module.css';
import nest from '../assets/nest.png'
import progressBar from '../assets/progressBar.png'

const BirdNest: React.FC = () => {
  return (
    <div className={styles.nestContainer}>
       <img src={nest} className={styles.nest}/>
       <img src={progressBar} className={styles.progress}/>
    </div>
  );
};

export default BirdNest;