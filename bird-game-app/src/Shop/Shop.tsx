import React from 'react';
import styles from './Shop.module.css';
import TopMenu from '../TopMenu/TopMenu';
import NestLevel from './NestLevel';
import NavBar from '../NavBar/NavBar';
import stick from './stick.png'

const Shop: React.FC = () => {
  const nestLevels = [
    { price: 2500 },
    { price: 2500 },
    { price: 2500 },
    { price: 2500 },
    { price: 2500 },
    { price: 2500 },
  ];

  const positions = [
    { top: '0%' },
    { top: '10%' },
    { top: '24%' },
    { top: '37%' },
    { top: '49.5%' },
    { top: '63.5%' },
  ]

  let nests: { top: string }[];
  switch (true) {
    case screen.availHeight <= 844:
        nests = [
            { top: '2rem' },
            { top: '6.4rem' },
            { top: '4.5rem' },
            { top: '4.5rem' },
            { top: '6rem' },
            { top: '4.5rem' },
        ]
        break;
    case screen.availHeight <= 1344:
        nests = [
            { top: '-0.1rem' },
            { top: '3.4rem' },
            { top: '2.5rem' },
            { top: '2rem' },
            { top: '3rem' },
            { top: '2rem' },
        ]
        break;
  }
  
  const birds = ['blue', 'red', 'purple', 'green', 'brown', 'yellow']
  return (
    <div className={styles.shopContainer}>
        <TopMenu />
        <div className={styles.nestLevels}>
            {nestLevels.map((level, index) => (
                <NestLevel key={index} price={level.price} position={positions[index]} nest={nests[index]} bird={birds[index]} />
            ))}
            <div className={styles.openSoon}>
                <div className={styles.bigSticks}>
                    <img src={stick} className={styles.bigStick} />
                    <img src={stick} className={styles.bigStick} />
                </div>
                <div className={styles.openSoonLabel}>
                    <i>Скоро откроется</i>
                </div>
            </div>
        </div>
        <NavBar />
    </div>
  );
};

export default Shop;
