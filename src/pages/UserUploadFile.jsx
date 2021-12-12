import React from 'react';
import Header from '../components/shared/Header';
import UploadFiles from '../components/UploadFiles';

export default function UserUploadFile() {
  return (
    <div>
      <Header />
      <div className='container'>
        <UploadFiles />
      </div>
    </div>
  );
}
