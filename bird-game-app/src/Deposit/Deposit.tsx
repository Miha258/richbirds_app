import { Outlet } from 'react-router-dom';
import NavBar from '../NavBar/NavBar';
import InputOutput from './InputOutput';

const Deposit = () => {
  return (
    <div>
        <InputOutput />
        <Outlet/>
        <NavBar/>
    </div>
  );
};

export default Deposit;
