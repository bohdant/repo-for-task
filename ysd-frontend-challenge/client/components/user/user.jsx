import React from "react";

const User = props => {
  const { user } = props;

  return (
    <div className="">
      <ul className="ys-list">
        <li className="ys-list__item">Name: {user.name}</li>
        <li className="ys-list__item">Username: {user.username}</li>
        <li className="ys-list__item">Email: {user.email}</li>
        <li className="ys-list__item">Website: {user.website}</li>
      </ul>
    </div>
  );
};

export default User;
