import React from "react";

const PersonCard = ({ person }) => {
  return (
    <div className="card mb-3">
      <div className=" d-flex flex-row">
        <img
          className="card-img-left"
          src={person.avatar}
          alt={person.name}
          width="200"
        />
        <div className="card-body">
          <h5 className="card-title">
            #{person.id} {person.name}
          </h5>
          <p className="card-text">
            <b>Company:</b> {person.company}
          </p>
          <p className="card-text">
            <b>Role:</b> {person.role}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PersonCard;
