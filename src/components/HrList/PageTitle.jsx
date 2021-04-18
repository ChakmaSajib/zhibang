import React from 'react';
export default function PageTitle({ heading }) {
  return (
    <React.Fragment>
      <h1 className='page-title'>{heading}</h1>
    </React.Fragment>
  );
}
