import styles from './Referral.module.css';
import NavBar from '../NavBar/NavBar';
import FriendsList from './FriendsList';
import Invite from './Invite';
import BalanceBar from '../BalanceBar/BalanceBar';

const Referral = () => {
  return (
    <div className={styles.referralPage}>
      <BalanceBar/>
      <div className={styles.referralsContainer}>
        <div className={styles.header}>
          <h2>3 Friends</h2>
          <p>Share your referral link and start earning</p>
          <h3>My Friends:</h3>
        </div>
        <FriendsList />
        <Invite/>
      </div>
      <NavBar />
    </div>
  );
};


export default Referral;
