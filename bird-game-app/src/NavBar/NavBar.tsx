import React from 'react';
import styles from './Navbar.module.css';
import { Link } from 'react-router-dom';
// import homeIcon from '../assets/homeIcon.png';
// import shopIcon from '../assets/shopIcon.png';
// import depositIcon from '../assets/depositIcon.png';
// import referralsIcon from '../assets/referralsIcon.png';

const NavBar: React.FC = () => {
  return (
    <div className={styles.navbar}>
      <NavItem label="Home" to={"/"}/>
      <div className={styles.divider}></div>
      <NavItem label="Shop" to={"/shop"}/>
      <div className={styles.divider}></div>
      <NavItem label="Deposit" to={"/deposit/recharge"}/>
      <div className={styles.divider}></div>
      <NavItem label="Referrals" to={"/referrals"}/>
    </div>
  );
};

interface NavItemProps {
//   icon: string;
  label: string;
  to: string;
}

const NavItem: React.FC<NavItemProps> = ({ label, to }) => {
  return (
    <div className={styles.navItem}>
      {/* <img src={icon} className={styles.navIcon} alt={label} /> */}
      <Link to={to} className={styles.navLabel}>{label}</Link>
    </div>
  );
};

export default NavBar;
