import React, { useEffect } from 'react';
import ButtonPrimary from '../Buttons/ButtonPrimary';
import HrProfileWithImage from './HrProfileWithImage';
import './_hrinfoinhomepage.scss';

import { useDispatch, useSelector } from 'react-redux';
import { getAllHrs } from '../../stores/actions/hrsActions';
import HrProfile from '../../assets/img/hr-profile.jpg';

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
                image={HrProfile}
                key={index}
                id={hr.hrid}
                name={hr.name}
                company={hr.cpname}
                experience={`${hr.experience_year} Years of experience`}
                totalCV={`${hr.check_cv_count} CV reviewed`}
                totalMock={`${hr.mock_interview_count} Mock reviewed`}
                stars={hr.star}
              />
            ))}
        </div>
      </div>
    </div>
  );
}

<HrProfileWithImage />;
