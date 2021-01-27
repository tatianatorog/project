import React from "react";
import { capitalizeFirstLetter, formattingDate } from "./functions";
import "./userHeader.scss";

export default function UserHeader({ user }) {
  return (

    <>
      <div className="user-profile">
        {Object.keys(user).length > 0 ? (
          <>

            <h1 className="user-message">
              {user.banner_message.replace(/<\/?[^>]+(>|$)/g, "")}
            </h1>
            <div className="user-info">
              <div>
                <img
                  src={user.user_profile_image}
                  className="user-img"
                  alt=""
                />
              </div>
              <div className="user-data">
                <p className="user-details">
                  <span className="user-title"> Subscription: </span>
                  {capitalizeFirstLetter(user.SUBSCRIPTION)}
                </p>
                <p className="user-details">
                  <span className="user-title">Creation date:</span>{" "}
                  {formattingDate(user.CREATION_DATE)}
                </p>
                {user.SUBSCRIPTION === "premium" ||
                user.SUBSCRIPTION === "basic" ? (
                  <p className="user-details">
                    <span className="user-title">
                      Last payment: </span>
                      {formattingDate(user.LAST_PAYMENT_DATE)} 
                  </p>
                ) : null}
              </div>
            </div>
          </>
        ) : null}
      </div>
    </>
  );
}
