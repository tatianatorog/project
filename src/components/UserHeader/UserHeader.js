import React from "react" ;
import {capitalizeFirstLetter, formattingDate, getNameLanguage} from "../../utils/switch"
import "./userHeader.scss";


export default function UserHeader({user}) {

  return (
    <>
      <div className="user-profile">
        {Object.keys(user).length > 0 ? (
          <>
            <h1>{user.banner_message.replace(/<\/?[^>]+(>|$)/g, "")}</h1>
            <div className="user-info">
              <div>
                <img
                  src={user.user_profile_image}
                  className="user-img"
                  alt=""
                />
                <h2>Name</h2>
              </div>
              <div>
                <p>
                  Subscription:{" "}
                  <span className="user-subscription">
                    {capitalizeFirstLetter(user.SUBSCRIPTION)}
                  </span>
                </p>
                <p>Creation Date: {formattingDate(user.CREATION_DATE)}</p>
                {user.SUBSCRIPTION === "premium" || user.SUBSCRIPTION === "basic"? (
                  <p>
                    Last payment date: {formattingDate(user.LAST_PAYMENT_DATE)}
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