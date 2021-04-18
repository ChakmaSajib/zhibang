import React from 'react';

export default function Employee() {
  return <div></div>;
}

function UserContactSection({ title, content }) {
  return (
    <div className='section'>
      <h3>{title}</h3>
      <p>{content}</p>
    </div>
  );
}
