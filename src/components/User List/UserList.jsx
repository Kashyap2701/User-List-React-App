/* eslint-disable no-unused-vars */
import React from "react";
import User from "../User/User";
import dummyUsers from "../../data/dummyUser";

function UserList() {
  return (
    <div style={{ width: "70%", margin: "10px" }}>
      <table>
        <thead>
          <tr>
            <th colSpan={2}>Name</th>
            <th>Status</th>
            <th>Access</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {dummyUsers.map((user) => {
            return <User key={user.id} user={user} />;
          })}
        </tbody>
      </table>
    </div>
  );
}

export default UserList;
