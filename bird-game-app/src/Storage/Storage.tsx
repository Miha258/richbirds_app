import NavBar from '../NavBar/NavBar';
import TopMenu from '../TopMenu/TopMenu';
import styles from './Storage.module.css';
import nests from './nests.png';

const Storage = () => {
  const eggs = [
    { name: 'red', profit: 3000 },
    { name: 'blue', profit: 3000 },
    { name: 'purple', profit: 3000}
  ]
  return (
    <div>
      <TopMenu/>
      <div className={styles.eggsBar}>
          <img className={styles.nests} src={nests}></img>
          <div className={styles.eggs}>
          {eggs.map(egg => <div className={styles.eggContainer}>
            <img src={`/src/assets/eggs/${egg.name}Egg.png`} className={styles.egg}></img>
            <h3 className={styles.profit}>{egg.profit}</h3>
          </div>)}
          </div>
      </div>
      <button className={styles.convertButton}>Convert to GOLD</button>
      <NavBar/>
    </div>
  );
};

export default Storage;