import styles from './Deposit.module.css'

const Recharge = () => {
  return (
    <div className={styles.section}>
      <div className={styles.header}>
        <h2>Поповнити рахунок</h2>
      </div>
      <div className={styles.accountInfo}>
        <div className={styles.copyField}>
            <span>TTYyCFN...12Vpik5sM</span>
            <button style={{ padding: '0.4rem 1.3rem 0.4rem'}} className={styles.copyBtn}>Copy</button>
        </div>
        <p className={styles.rechargeInfo}>Please do not recharge other non-TRC20 (USDT) assets. The funds will arrive in your account in about 1 to 3 minutes after recharging.</p>
        <p style={{ color: 'black', fontSize: '21px'}}><strong>1000 GOLD = 10 USDT</strong></p>
      </div>
      <button className={styles.rechargeBtn}>Recharge</button>
    </div>
  );
};

export default Recharge;