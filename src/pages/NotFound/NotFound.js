import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/shared/Header';
import { useDispatch, useSelector } from 'react-redux';
import changeCount from '../../stores/actions/count.actions';
import Booking from '../../components/Booking/Booking';
import CustomButton from '../../components/CustomButton/CustomButton';

export default function NotFoundPage() {
  const dispatch = useDispatch();
  let count = useSelector((state) => state.count.count);

  const increment = () => {
    count++;
    dispatch(changeCount(count));
  };

  const decrement = () => {
    count--;
    dispatch(changeCount(count));
  };

  return (
    <div>
      <Header />
      <h2>{count}</h2>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>

      <Booking />

      <h2>404</h2>
      <p style={{ textAlign: 'center' }}>
        <Link to='/'>Go to Home </Link>
      </p>
      <CustomButton
        label='Custom Button'
        variant='danger'
        onClick={() => console.log('hello')}
      />
      <CustomButton label='Large' variant='outline' size='large' />
    </div>
  );
}
