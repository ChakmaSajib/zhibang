import React, { useEffect, useRef, createRef } from 'react';

export default function Testing() {
  const firstNameRef = useRef(null);
  const lastNameRef = useRef('sajib');
  const buttonRef = useRef(null);

  const firstNameR = createRef();

  function firstKeyDown(event) {
    if (event.key === 'Enter') lastNameRef.current.focus();
  }

  function secondKeyDown(event) {
    console.log(event);
    if (event.key === 'Enter') buttonRef.current.focus();
  }

  function buttonKeyDown(event) {
    alert('submit button');
  }
  //   useEffect(() => {
  //     firstNameRef.current.focus();
  //   }, []);

  return (
    <div>
      <h2>Testing Ref</h2>
      <input
        ref={firstNameR}
        placeholder='First name'
        type='text'
        onKeyDown={firstKeyDown}
      ></input>
      <input
        placeholder='Last  name'
        type='text'
        ref={lastNameRef}
        onKeyDown={secondKeyDown}
      ></input>
      <button type='submit' ref={buttonRef} onKeyDown={buttonKeyDown}>
        Submit
      </button>
    </div>
  );
}
