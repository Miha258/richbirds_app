import React from 'react';
import BirdHouse from '../BirdsHouse/BirdHouse'
import styles from './Home.module.css';
import Nest from '../BirdNest/Nest';

const Home: React.FC = () => {
  return (
    <div>
      {/* <div className={styles.home}>
        <BirdHouse/>
      </div> */}
      <div className={styles.nest}>
        <Nest/>
      </div>
    </div>
  );
};

export default Home;
