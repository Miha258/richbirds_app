import React from 'react';
import styles from './Referral.module.css';
import coin from '../assets/coin.png'

interface FriendCardProps {
  name: string;
  points: number;
}

const FriendCard: React.FC<FriendCardProps> = ({ name, points }) => {
  return (
    <div className={styles.friendCard}>
      <span>{name}</span>
      <strong><span>+{points}</span></strong>
      <img src={coin} alt="Coin" className={styles.coinIcon} />
    </div>
  );
};

export default FriendCard;
