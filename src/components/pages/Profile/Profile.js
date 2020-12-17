import React, { useState, useContext  } from "react";
import UserHeader from "../../UserHeader/UserHeader";
import UserInput from "../../fields/UserInput";
import "./Profile.scss"  
import {AppContext} from "../../../utils/useContext"



export default function Profile() {
  const [states, setstates] = useState(false);
  const {user } = useContext(AppContext);
  const [email, setEmail] = useState(user?.user_email);
  
  
  return (
    <>
      <div className="user-settings">
        {Object.keys(user).length > 0 ? (
          <>
            <UserHeader user={user} />
            <p></p>
            <UserInput user={user}/>
            {/* <UserInput email={user?.user_email} changeEmail={changeEmail}  timezone={timezone} changeTimezone={changeTimezone} theme={theme} changeTheme={changeTheme} language={language} changeLanguage={changeLanguage} onClick={updateUser}></UserInput> */}
            {/* <Features user={user.ENABLED_FEATURES}></Features> */}
          </>
        ) : null}
      </div>
    </>
  );
}


