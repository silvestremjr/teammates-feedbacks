import React from "react";
import { Link } from "react-router-dom";

const TeammatesTable = ({ teammates }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col" width="10%">#</th>
          <th scope="col" width="30%">Name</th>
          <th scope="col" width="30%">Company</th>
          <th scope="col" width="30%">Role</th>
        </tr>
      </thead>
      <tbody>
        {teammates?.map((person) => (
          <tr key={person.id}>
            <th scope="row">{person.id}</th>
            <td>
              <Link to={`/teammates/${person.id}`}>{person.name}</Link>
            </td>
            <td>{person.company}</td>
            <td>{person.role}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TeammatesTable