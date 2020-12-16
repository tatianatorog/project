import React from "react" ;
import {capitalizeFirstLetter, formattingDate, getNameLanguage} from "../../utils/switch"
import "./userHeader.scss";


export default function UserHeader({user}) {
  // console.log(JSON.parse(user.CREATION_DATE))

  return (
    <>
      <div className="user-profile">
        {Object.keys(user).length > 0 ? (
          <>
            <h1 className="user-message">{user.banner_message.replace(/<\/?[^>]+(>|$)/g, "")}</h1>
            <div className="user-info">
              <div>
                <img
                  src={user.user_profile_image}
                  className="user-img"
                  alt=""
                />
                {/* <h2>Name</h2> */}
              </div>
              <div className="user-data">
                <p>
                  <b> Subscription: {" "}</b>
                  
                  <span className="user-subscription">
                    {capitalizeFirstLetter(user.SUBSCRIPTION)}
                  </span>
                </p>
                <p><b>Creation date:</b> {formattingDate(user.CREATION_DATE)}</p>
                {user.SUBSCRIPTION === "premium" || user.SUBSCRIPTION === "basic"? (
                  <p>
                    Last payment date: {formattingDate(user.LAST_PAYMENT_DATE)}
                  </p>
                ) : null}
              </div>
            </div>
            {/* <h2>name</h2> */}
          </>
        ) : null}
      </div>
    </>
  );
}