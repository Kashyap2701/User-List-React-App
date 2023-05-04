/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import style from "./Profile.module.css";

function Profile({ name, email, profileImg }) {
  return (
    <div className={style["user-details"]}>
      <img width="50" src={profileImg} alt="profile-photo" />
      <div>
        <span>{name}</span>
        <span>{email}</span>
      </div>
    </div>
  );
}

export default Profile;
