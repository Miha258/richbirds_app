import React from 'react';
import styles from './BirdHouse.module.css';
import nest from '../assets/nest.png';
import progressBar from '../assets/progressBar.png';
import { useNavigate } from "react-router-dom";

interface BirdNestProps {
  id: number;
  bird: string;
  progress: number;
}

const BirdNest: React.FC<BirdNestProps> = ({ id, bird, progress }) => {
  const navigate = useNavigate();
  return (
    <div className={styles.nestContainer} onClick={() => navigate(`/nest/${id}`)}>
      <img src={nest} className={styles.nest} alt="Nest"/>
      {bird && <img src={`/src/assets/birds/${bird}.png`} alt="Bird" className={styles.bird} />}
      {bird && <img src={progressBar} className={styles.progress} alt="Progress Bar" /> }
      {bird && <div className={styles.progressFill} style={{ width: `${progress - 2}%`}}></div>}
    </div>
  );
};

export default BirdNest;
