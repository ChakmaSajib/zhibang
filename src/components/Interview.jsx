import React from 'react';
import PageTitle from '../components/HrList/PageTitle';
import SearchBox from '../components/HrList/SearchBox';
import JobInterview from './JobsInterview/Company';

export default function Interview() {
  return (
    <div className='container'>
      <div className='questions-table'>
        <table className='table'>
          <thead>
            <tr>
              <td>Name</td>
              <td>Category</td>
              <td>Category</td>
              <td>Action</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>React Basics </td>
              <td>Web Development</td>
              <td>30 minutes</td>
              <td>take exams</td>
            </tr>
            <tr>
              <td>React Basics </td>
              <td>Web Development</td>
              <td>30 minutes</td>
              <td>take exams</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
