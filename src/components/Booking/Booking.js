import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSkype, faQq, faWeixin } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

export default function Booking() {
  const [value, onChange] = useState(new Date());

  const handleClick = (event) => {
    let idOfClickedIcon = event.currentTarget.id;
    console.log(idOfClickedIcon);
  };
  return (
    <div className='booking'>
      <div className='calendar'>
        <p>Select an available time </p>
        <Calendar onChange={onChange} value={value} />
      </div>

      <div className='booking__tools'>
        <p>Which method do you prefer to give mock interview with HR?</p>
        <div class='zhibang__booking booking__tools__type'>
          <FontAwesomeIcon
            icon={faSkype}
            id='skype'
            onClick={handleClick}
            className='active'
          />
          <FontAwesomeIcon icon={faQq} id='qq' onClick={handleClick} />
          <FontAwesomeIcon icon={faWeixin} id='wechat' onClick={handleClick} />
        </div>
        <p className='textOr'>OR</p>
        <div className='zhibang__booking'>
          Use our <span> Zhibang Live Chat App</span>
        </div>
      </div>
      <button className='zhibang__booking conitnue_button'>
        Continue Booking
      </button>
    </div>
  );
}
