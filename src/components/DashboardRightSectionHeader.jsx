import React from 'react';

export default function DashboardRightSectionHeader() {
  return (
    <React.Fragment>
      <div className='questions-table'>
        <table className='table'>
          <thead>
            <tr>
              <td>On Request</td>
              <td>On Going</td>
              <td>Canceled</td>
              <td>Completed</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>14 </td>
              <td>32 C</td>
              <td>232</td>
              <td>3434</td>
            </tr>
          </tbody>
        </table>
      </div>
    </React.Fragment>
  );
}
