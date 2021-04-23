import React from 'react';
import { NavLink } from 'react-router-dom';
import './_menu.scss';
import { useSelector } from 'react-redux';
export default function Menu() {
  const authentication = useSelector((state) => state.authentication);
  console.log(authentication.user);
  return (
    <div className='nav'>
      <nav>
        <ul>
          <li>
            <NavLink to='/'>Home</NavLink>
          </li>

          {/* {authentication.hasOwnProperty('user') &&
          authentication.user.data.hasOwnProperty('hr') ? null : (
            <li>
              <NavLink to='/hr'>Find HR</NavLink>
            </li>
          )} */}
          <li>
            <NavLink to='/hr'>Find HR</NavLink>
          </li>

          <li>
            <NavLink to='/mock'>Mock Interview</NavLink>
          </li>
          <li>
            <NavLink to='/questions'>Interview Questions</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}
