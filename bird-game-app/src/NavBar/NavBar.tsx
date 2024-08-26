import React from 'react';
import styles from './Navbar.module.css';
import { Link } from 'react-router-dom';
import home from './icons/home.svg'
import friends from './icons/friends.svg'
import shop from './icons/shop.svg'
import deposit from './icons/deposit.svg'

const NavBar: React.FC = () => {
  return (
    <div className={styles.navbar}>
      <NavItem label="Home" to={"/"} icon={home}/>
      <div className={styles.divider}></div>
      <NavItem label="Shop" to={"/shop"} icon={shop}/>
      <div className={styles.divider}></div>
      <NavItem label="Deposit" to={"/deposit/recharge"} icon={deposit}/>
      <div className={styles.divider}></div>
      <NavItem label="Referrals" to={"/referrals"} icon={friends}/>
    </div>
  );
};

interface NavItemProps {
  icon: string;
  label: string;
  to: string;
}

const NavItem: React.FC<NavItemProps> = ({ label, to, icon }) => {
  return (
    <div className={styles.navItem}>
       <Link to={to} className={styles.navLabel}>
        <img src={icon} className={styles.navIcon} alt={label} />
        {label}
      </Link>
    </div>
  );
};

export default NavBar;
