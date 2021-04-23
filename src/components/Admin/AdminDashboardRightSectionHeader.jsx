import React from 'react';

export default function AdminDashboardRightSectionHeader({ td1, td2 }) {
  return (
    <React.Fragment>
      <div className='questions-table'>
        <table className='table'>
          <thead>
            <tr>
              <td>Type</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Student</td>
            </tr>
          </tbody>
        </table>
      </div>
    </React.Fragment>
  );
}
