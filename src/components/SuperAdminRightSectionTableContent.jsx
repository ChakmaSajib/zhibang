import React from 'react';

export default function SuperAdminRightSectionTableContent() {
  return (
    <React.Fragment>
      <div className='questions-table'>
        <table className='table'>
          <thead>
            <tr>
              <td>Student</td>
              <td>HR</td>
              <td>State</td>
              <td>Time</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Sajib Chakma </td>
              <td>Mono C</td>
              <td>On requested</td>
              <td>April 10, 2021</td>
            </tr>
            <tr>
              <td>Sajib Chakma </td>
              <td>Mono C</td>
              <td>On requested</td>
              <td>April 10, 2021</td>
            </tr>
          </tbody>
        </table>
      </div>
    </React.Fragment>
  );
}
