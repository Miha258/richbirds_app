import { useParams } from 'react-router-dom';
import NavBar from '../NavBar/NavBar';
import TopMenu from '../TopMenu/TopMenu';
import styles from './Cage.module.css';
import { SetStateAction, useState } from 'react';

const Cage = () => {
  const { name } = useParams<{ name: string }>();

  return (
    <div>
      <TopMenu/>
      {name ? <img src={`/src/assets/birds/${name}.png`} className={styles.bird}/> : <div>No bird image</div>}
      <PackageSelector />
      <NavBar />
    </div>
  );
};

const PackageSelector = () => {
  const [selectedPackage, setSelectedPackage] = useState(28);

  const handlePackageClick = (packageValue: SetStateAction<number>) => {
    setSelectedPackage(packageValue);
  };

  return (
    <div className={styles.packageSelector}>
      <div>Выбери пакет</div>
      <div className={styles.packages}>
        <button 
          className={`${styles.package} ${selectedPackage === 7 ? styles.selected : ''}`} 
          onClick={() => handlePackageClick(7)}
        >
          <span>7</span>
        </button>
        <button 
          className={`${styles.package} ${selectedPackage === 14 ? styles.selected : ''}`} 
          onClick={() => handlePackageClick(14)}
        >
          <span>14</span>
        </button>
        <button 
          className={`${styles.package} ${selectedPackage === 28 ? styles.selected : ''}`} 
          onClick={() => handlePackageClick(28)}
        >
          <span>28</span>
        </button>
      </div>
      <div className={styles.divider}></div>
      <div className={styles.priceLabel}>
        <div className={styles.profit}>Profit: <strong>2700</strong></div>
        <button className={styles.buyButton}>Buy</button>
      </div>
    </div>
  );
};

export default Cage;