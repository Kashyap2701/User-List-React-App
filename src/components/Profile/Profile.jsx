/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import { useDispatch } from "react-redux";
import { hoverActions } from "../../store/HoverSlice";
import { cardActions } from "../../store/CardSlice";
import style from "./Profile.module.css";

function Profile({ name, email, profileImg }) {
  const dispatch = useDispatch();
  const user = { name, email, profileImg };

  const mouseEnterHandler = () => {
    dispatch(hoverActions.toggleHover());
    dispatch(cardActions.renderDataToCard(user));
  };

  const mouseLeaveHandler = () => {
    dispatch(hoverActions.toggleHover());
  };

  return (
    <div
      className={style["user-details"]}
      onMouseEnter={mouseEnterHandler}
      onMouseLeave={mouseLeaveHandler}
    >
      <img width="50" src={profileImg} alt="profile-photo" />
      <div>
        <span>{name}</span>
        <span>{email}</span>
      </div>
    </div>
  );
}

export default Profile;
