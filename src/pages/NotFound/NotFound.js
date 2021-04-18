import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/shared/Header';
import { useDispatch, useSelector } from 'react-redux';
import Booking from '../../components/Booking/Booking';
import CustomButton from '../../components/CustomButton/CustomButton';
import Users from './Users';
import Hrs from './Hrs';

export default function NotFoundPage() {
  const dispatch = useDispatch();

  return (
    <div>
      <Header />
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
      <Users />
      <Hrs />
    </div>
  );
}
