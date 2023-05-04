/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import Profile from "../Profile/Profile";
import { Trash2, Lock } from "react-feather";

// eslint-disable-next-line react/prop-types
function User({ user }) {
  const iconStyle = {
    cursor: "pointer",
    opacity: "0.5",
  };

  const accessHandler = () => {};

  const statusHandler = () => {};

  return (
    <tr>
      <td colSpan={2}>
        <Profile
          name={user.name}
          email={user.email}
          profileImg={user.profileImg}
        />
      </td>
      {user.access !== "owner" ? (
        <>
          <td>
            <select
              name="status"
              defaultValue={user.status.toString()}
              onChange={statusHandler}
            >
              <option value="1">Active</option>
              <option value="0">Inactive</option>
            </select>
          </td>
          <td>
            <select
              name="access"
              defaultValue={user.access}
              onChange={accessHandler}
            >
              <option value="manager">Manager</option>
              <option value="read">Read</option>
            </select>
          </td>
          <td style={{ textAlign: "start" }}>
            <Trash2 style={iconStyle} />
          </td>
        </>
      ) : (
        <>
          <td>
            <span style={{ color: "green", fontWeight: "bolder" }}>Active</span>
          </td>
          <td>
            <span style={{ fontWeight: "bolder" }}>Owner</span>
          </td>
          <td>
            <Lock style={iconStyle} />
          </td>
        </>
      )}
    </tr>
  );
}

export default User;
