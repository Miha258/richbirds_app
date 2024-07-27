import React from 'react';
import BirdHouse from '../BirdsHouse/BirdHouse';
// import BirdCage from '../components/BirdCage/BirdCage';
// import Referral from '../components/Referral/Referral';
// import Conversion from '../components/Conversion/Conversion';
// import Deposit from '../components/Deposit/Deposit';
import styles from './Home.module.css';

const Home: React.FC = () => {
  return (
    <div className={styles.home}>
      <BirdHouse />
      {/* <BirdCage />
      <Referral />
      <Conversion />
      <Deposit /> */}
    </div>
  );
};

export default Home;
