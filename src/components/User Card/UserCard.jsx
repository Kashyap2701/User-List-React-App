/* eslint-disable no-unused-vars */
import React from "react";
import style from "./UserCard.module.css";
import userData from "../../data/dummyUser";

function UserCard() {
  const user = userData[0];

  return (
    <div className={style.container}>
      <div className={style["user-details-card"]}>
        <div className={style["user-info"]}>
          <img width={100} src={user.profileImg} alt="profile-picture" />
          <span style={{ fontWeight: "600" }}>
            {user.name}
            <sup>.</sup>
          </span>
          <span style={{ opacity: "0.5" }}>{user.email}</span>
          <span style={{ fontWeight: "600" }}>Your Plan : Standard</span>
          <button>Active User</button>
        </div>
        <div className={style["progress"]}>
          <p>Plan Uses</p>
          <progress
            className={style["progress-bar"]}
            value="64"
            max="100"
          ></progress>
        </div>
        <div className={style["profile-analysis"]}>
          <div>
            <span className={style.number}>2434</span>
            <span style={{ opacity: "0.5" }}>clicks reviewed</span>
          </div>
          <div className={style["vertical-line"]}></div>
          <div>
            <span className={style.number}>5000</span>
            <span style={{ opacity: "0.5" }}>Monthly clicks</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserCard;
