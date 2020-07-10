import React from 'react';

const Table = ({person}) => {


  return (
    <table className='inner'>
      <thead>
        <tr>
          <th>Id</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Visits</th>
        </tr>
      </thead>
      <tbody>
        {(person.length > 0) ? person.map((person, index) => {
          return (
            <tr key={index}>
              <td>{ person.personId }</td>
              <td>{ person.first_name }</td>
              <td>{ person.last_name }</td>
              <td>{ person.visits }</td>
            </tr>
          )
        }): <tr><td colSpan="5">Loading...</td></tr>}

      </tbody>
    </table>
  );
}

export default Table
