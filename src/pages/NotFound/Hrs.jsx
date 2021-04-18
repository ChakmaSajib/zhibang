import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllHrs } from '../../stores/actions/hrsActions';

const Hrs = () => {
  const dispatch = useDispatch();
  const hrsList = useSelector((state) => state.hrsList);
  const { loading, hrs } = hrsList;
  useEffect(() => {
    dispatch(getAllHrs());
  }, [dispatch]);
  return <>{loading ? 'Loading...' : hrs.map((u) => <h3>{u.name}</h3>)}</>;
};

export default Hrs;
