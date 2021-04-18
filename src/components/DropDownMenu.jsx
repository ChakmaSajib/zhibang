import React from 'react';

export default function DropDownMenu() {
  return (
    <div className='dropdown'>
      <li>
        <a href=''>
          Requested<span>2</span>
        </a>
      </li>
      <li>
        <a href=''>Accepted</a>
      </li>
      <li>
        <a href=''>Completed</a>
      </li>
      <li>
        <a href=''>Rejected</a>
      </li>
    </div>
  );
}
