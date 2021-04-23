import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllHrs, registerHr } from '../../stores/actions/hrsActions';

const data = {
  hrname: 'ssj4',
  cpname: 'Dhuduk Inc',
  email: '6546576433@qq.com',
  phone: '333231',
  cpaddr: 'Wuhan, CHINA',
  password: '123456',
  major: '软件工程/IT'
};

const Hrs = () => {
  const dispatch = useDispatch();
  const hrsList = useSelector((state) => state.hrsList);
  const { loading, hrs } = hrsList;

  const handleClick = () => {
    console.log(data);
    dispatch(registerHr(data));
  };
  useEffect(() => {
    dispatch(getAllHrs());
  }, [dispatch]);
  return (
    <>
      {/* {loading ? 'Loading...' : hrs.map((u) => <h3>{u.hrname}</h3>)} */}
      <button onClick={handleClick}>Button</button>
    </>
  );
};

export default Hrs;
