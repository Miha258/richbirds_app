import React from 'react';
import styles from '../BirdNest/Nest.module.css'
import nest from '../assets/nest.png'
import shadow from './nestParts/nestShadow.png'
import MenuBar from '../BirdsMenu/MenuBar';
import progressBar from '../assets/progressBar.png'

import eggsNest from './nestParts/eggsNest.png'
import leftNest from './nestParts/leftEgg.png'
import rightNest from './nestParts/rightEgg.png'
import centerNest from './nestParts/centerEgg.png'

import part from './nestParts/part.png'
import part1 from './nestParts/part1.png'
import part2 from './nestParts/part2.png'
import part3 from './nestParts/part3.png'
import part4 from './nestParts/part4.png'
import part5 from './nestParts/part5.png'
import part6 from './nestParts/part6.png'
import part7 from './nestParts/part7.png'
import part8 from './nestParts/part8.png'
import part9 from './nestParts/part9.png'
import eggsNestTop from './nestParts/eggsNestTop.png'
import eggsNestShadow from './nestParts/eggsNestShadow.png'

const Nest: React.FC = () => {
  return (
    <div className={styles.nestContainer}>
        <MenuBar/>
        <div>
            <img src={nest} className={styles.nest} alt="Nest" />
            <img src={shadow} className={styles.shadow} alt="Shadow" />
            <img src={progressBar} className={styles.progress} alt="Progress Bar" />

            <img src={part} className={styles.part}/>
            <img src={part1} className={styles.part1}/>
            <img src={part2} className={styles.part2}/>
            <img src={part3} className={styles.part3}/>
            <img src={part4} className={styles.part4}/>
            <img src={part5} className={styles.part5}/>
            <img src={part6} className={styles.part6}/>
            <img src={part7} className={styles.part7}/>
            <img src={part8} className={styles.part8}/>
            <img src={part9} className={styles.part9}/>
            <img src={eggsNest} className={styles.eggsNest}/>

            <img src={leftNest} className={styles.leftEgg}/>
            <img src={rightNest} className={styles.rightEgg}/>
            <img src={centerNest} className={styles.centerEgg}/>

            <img src={eggsNestTop} className={styles.eggsNestTop}/>
            <img src={eggsNestShadow} className={styles.eggsNestShadow}/>
            <button className={styles.claim}>Claim</button>
        </div>
    </div>
  );
};

export default Nest;


