import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

export default function ChatingSearchBox() {
  return (
    <div>
      <h2>Search box</h2>
      <form className='chating__searchbox'>
        <button type='button' value='submit'></button>
        <input placeholder='Search in chat' type='text'></input>
      </form>
    </div>
  );
}
