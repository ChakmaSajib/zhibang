import React, { useEffect } from 'react';
import ButtonPrimary from '../Buttons/ButtonPrimary';
import HrProfileWithImage from './HrProfileWithImage';
import './_hrinfoinhomepage.scss';

import { useDispatch, useSelector } from 'react-redux';
import { getAllHrs } from '../../stores/actions/hrsActions';

export default function HrInfoInHomePage() {
  const dispatch = useDispatch();
  const hrsList = useSelector((state) => state.hrsList);
  const { loading, hrs } = hrsList;
  useEffect(() => {
    dispatch(getAllHrs());
  }, [dispatch]);

  return (
    <div className='container'>
      <div className='hrinfoinhomepage'>
        <h5>Friendly HR in Industry</h5>
        <div className='cards-container'>
          {hrs.length &&
            hrs.map((hr, index) => (
              <HrProfileWithImage
                id={hr.hrid}
                name={hr.name}
                company={hr.cpname}
                experience='12 Years of experience'
                totalCV='47 CV reviewed'
                totalMock='190 Mock Interviews'
                stars='5'
              />
            ))}
        </div>
      </div>
    </div>
  );
}

<HrProfileWithImage />;
