import React from 'react';
import styles from './TopMenu.module.css';
import background from './backgrond.png'
import { Link } from 'react-router-dom';

const TopMenu: React.FC = () => {
  return (
    <div>
      <img src={background} className={styles.background}/>
      <div className={styles.buttons}>
        <button className={styles.menuButton}><Link to={"/"}>Birds</Link></button>
        <button className={styles.menuButton}><Link to={"/storage"}>Storage</Link></button>
      </div>
    </div>
  );
};

export default TopMenu;
