import FriendCard from './FriendsCard';
import styles from './Referral.module.css';

const FriendsList = () => {
    const friends = [
      { name: 'Jordan', points: 2500 },
      { name: 'Alice', points: 1200 },
      { name: 'Mike', points: 1500 },
    ];
    
    return (
      <div className={styles.friendsList}>
        {friends.map((friend, index) => (
          <FriendCard key={index} name={friend.name} points={friend.points} />
        ))}
      </div>
    );
};

export default FriendsList;