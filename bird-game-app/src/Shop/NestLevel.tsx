import React from 'react';
import styles from './Shop.module.css';
import coin from '../assets/coin.png';
import nestImg from '../assets/nest.png';
import stick from './stick.png';
import { useNavigate } from 'react-router-dom';

interface NestLevelProps {
  price: number;
  position: { top: string };
  nest: { top: string };
  bird: string;
}

const NestLevel: React.FC<NestLevelProps> = ({ price, position, nest, bird }) => {
  if (!position) {
    return null;
  }
  const navigate = useNavigate();
  return (
    <div className={styles.nestLevel} style={{ top: position.top }}>
      <div className={styles.sticks}>
        <img src={stick} className={styles.stick} />
        <img src={stick} className={styles.stick} />
      </div>
      <div className={styles.priceTag}>
        <span>{price}</span>
        <img className={styles.coin} src={coin} alt="Coin" />
      </div>
      <div className={styles.nestContainer} style={{ top: nest.top }}>
        {bird && <img src={`/src/assets/birds/${bird}.png`} alt="Bird" className={styles.bird}/>}
        <img src={nestImg} className={styles.nest} alt="Nest" />
        <button className={styles.buyButton} onClick={() => navigate(`/cage/${bird}`)}>Buy</button>
      </div>
    </div>
  );
};

export default NestLevel;
