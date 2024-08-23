import { Link } from 'react-router-dom';
import styles from './Deposit.module.css'

const InputOutput = () => {
  return (
    <div className={styles.navbar}>
      <Link to="/deposit/recharge">
        <button className={styles.navBtn} style={{ background: '#FFB818'}}>Ввод</button>
      </Link>
      <Link to="/deposit/withdraw">
        <button className={styles.navBtn} style={{ background: '#2FC4F2'}}>Вывод</button>
      </Link>
    </div>
  );
};

export default InputOutput;
