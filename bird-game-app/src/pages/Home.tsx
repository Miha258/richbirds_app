import React from 'react';
import styles from './Home.module.css';
import Nest from '../BirdNest/Nest';
import BirdHouse from '../BirdsHouse/BirdHouse';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Shop from '../Shop/Shop';
import Cage from '../Cage/Cage';
import Referral from '../Referral/Referral';
import Storage from '../Storage/Storage';
import Withdraw from '../Deposit/Withdraw';
import Recharge from '../Deposit/Rechange';
import Deposit from '../Deposit/Deposit';

const router = createBrowserRouter([
  {
    path: "/",
    element: <div className={styles.home}>
      <BirdHouse/>
    </div>,
    
  },
  {
    path: "nest/:id",
    element: <div className={styles.nest}>
      <Nest/>
    </div>
  },
  {
    path: "shop",
    element: <div className={styles.shop}>
      <Shop/>
    </div>
  },
  {
    path: "cage/:name",
    element: <div className={styles.cage}>
      <Cage/>
    </div>
  },
  {
    path: "referrals",
    element: <div className={styles.referral}>
        <Referral/>
    </div>
  },
  {
    path: "storage",
    element: <div className={styles.storage}>
        <Storage/>
    </div>
  }, 
  {
    path: "deposit",
    element: <div className={styles.deposit}>
      <Deposit/>
    </div>,
    children: [
      { path: 'recharge', element: <Recharge/> },
      { path: 'withdraw', element: <Withdraw/> }
    ]
  }
]);


const Home: React.FC = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default Home;
