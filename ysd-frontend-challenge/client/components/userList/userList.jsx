import React, { useState } from "react";
import { UserContainer } from "../user";

const userList = props => {
  const { users } = props;
  const [selectedUser, setSelectedUser] = useState(null);
  return (
    <div>
      {users.map(user => (
        <div
          className="ys-row user-list-row"
          key={user.id}
          onClick={() => setSelectedUser({id:user.id, name: user.name})}
        >
          <div className="ys-col">
            <p className="ys-body-text ys-body-text--large"> Name: </p>
            <p className="ys-body-text ys-body-text">{user.name}</p>
          </div>
          <div className="ys-col">
            <p className="ys-body-text ys-body-text--large"> UserName: </p>
            <p className="ys-body-text ys-body-text">{user.username}</p>
          </div>
          <div className="ys-col">
            <p className="ys-body-text ys-body-text--large"> Eamil: </p>
            <p className="ys-body-text ys-body-text">{user.email}</p>
          </div>
          <div className="ys-col">
            <p className="ys-body-text ys-body-text--large"> Phone: </p>
            <p className="ys-body-text ys-body-text">{user.phone}</p>
          </div>
          <div className="ys-col">
            <p className="ys-body-text ys-body-text--large"> Company name: </p>
            <p className="ys-body-text ys-body-text">{user.company.name}</p>
          </div>
        </div>
      ))}
      {selectedUser && <UserContainer userIdName={selectedUser} />}
    </div>
  );
};

export default userList;
