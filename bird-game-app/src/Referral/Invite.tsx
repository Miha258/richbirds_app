import styles from './Referral.module.css'
import copy1 from './copyParts/first.png'
import copy2 from './copyParts/second.png'

const Invite = () => {
    return (
      <div className={styles.inviteSection}>
        <div>
            <p>Earn 5% of each referral's deposit</p>
            <p style={{ color: 'black' }}>+1 hour to collect funds</p>
        </div>
        <div className={styles.buttons}>
            <button className={styles.inviteButton}>Invite a friends</button>
            <button className={styles.linkButton}>
              <img src={copy2} className={styles.copy2}></img>
              <img src={copy1} className={styles.copy1}></img>
            </button>
        </div>
      </div>
    );
};

export default Invite