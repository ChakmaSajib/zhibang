import React from 'react';
import { NavLink } from 'react-router-dom';
import './_menu.scss';
export default function Menu() {
  return (
    <div className='nav'>
      <nav>
        <ul>
          <li>
            <NavLink to='/'>Home</NavLink>
          </li>
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
