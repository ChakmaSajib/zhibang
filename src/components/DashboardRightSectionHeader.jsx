import React from 'react';

export default function DashboardRightSectionHeader({ td1, td2 }) {
  return (
    <React.Fragment>
      <div className='questions-table'>
        <table className='table'>
          <thead>
            <tr>{td1.length && td1.map((td) => <td>{td}</td>)}</tr>
          </thead>
          <tbody>
            <tr>{td1.length && td2.map((td) => <td>{td}</td>)}</tr>
          </tbody>
        </table>
      </div>
    </React.Fragment>
  );
}
