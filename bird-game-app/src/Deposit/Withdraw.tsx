import styles from './Deposit.module.css'
import coin from '../assets/coin.png'

const Withdraw = () => {
  return (
    <div className={styles.section}>
      <div className={styles.header}>
        <h2>Счет для вывода средств</h2>
        <p>Вывод средств до 12 часов</p>
      </div>
      <div className={styles.balance}>
        <p>Итоговый баланс</p>
        <div className={styles.coin}>
          <h1>2700</h1>
          <img src={coin} style={{ width: '55px', height: '55px'}}></img>
        </div>
      </div>
      <p className={styles.sum}>Сумма: 3000 - 10000</p>
      <p className={styles.address}>Адрес кошелька trc 20 (USDT)</p>
      <button className={styles.confirmBtn} style={{ marginTop: '50px'}}>Подтвердить</button>
    </div>
  );
};

export default Withdraw;
