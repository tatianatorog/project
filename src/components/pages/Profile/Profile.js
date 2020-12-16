import React, { useEffect, useState, useContext  } from "react";
import axios from "../../../axios";
import UserHeader from "../../UserHeader/UserHeader";
import UserInput from "../../fields/UserInput";
import Features from "../../switch/Features"
import "./Profile.scss"  
import {AppContext} from "../../useContext"


// const onSubmit = async () => {
//   await axios.post("http://localhost:8010/api/v1/customerdata/", {
//     data: {
//       SUBSCRIPTION: "basic",
//       CREATION_DATE: "2013-03-10T02:00:00Z",
//       LAST_PAYMENT_DATE: "2010-01-10T09:25:00Z",
//       theme_name: "Tropical Island",
//       ENABLED_FEATURES: {
//         CERTIFICATES_INSTRUCTOR_GENERATION: true,
//         INSTRUCTOR_BACKGROUND_TASKS: true,
//         ENABLE_COURSEWARE_SEARCH: true,
//         ENABLE_COURSE_DISCOVERY: true,
//         ENABLE_DASHBOARD_SEARCH: true,
//         ENABLE_EDXNOTES: true,
//       },
//       language_code: "en",
//       banner_message: "<p><span>Welcome</span> to Mr X's website</p>",
//       displayed_timezone: "America/Bogota",
//       user_profile_image: "https://i.imgur.com/LMhM8nn.jpg",
//       user_email: "barack@aol.com",
//     },
//   });
// };

// console.log(request.getUserInfoById("291db290-3aee-4c21-84c3-528076b0d0b7"))
// console.log(onSubmit())



export default function Profile() {
  // const [user, setUser] = useState({});
  const [states, setstates] = useState(false);
  const {user } = useContext(AppContext);
  const [email, setEmail] = useState(user?.user_email);
  
  // const id = "e1005854-3667-479b-9b50-658fe224b3ee";
  // useEffect(() => {
  //   async function fetchData() {
  //     const requests = await axios.get(id);
  //     // const { user_email, ...all } = requests.data.data;
  //     // return setUser({ user_email, ...all });
  //     setUser(requests.data.data)
      
  //   }
  //   fetchData();
  // }, []);

  

  
//   const [timezone, setTimezone] = useState(user.displayed_timezone);
//   const [theme, setTheme] = useState(user.theme_name);
//   const [language, setLanguage] = useState(user.language_code);
  
//   const changeEmail = (e) => setEmail(e.currentTarget.value);
//   const changeTimezone = (e) => setTimezone(e.currentTarget.value);
//   const changeTheme = (e) => setTheme(e.currentTarget.value);
//   const changeLanguage = (e) => setLanguage(e.currentTarget.value);
 
// console.log(email)
  
  

 

//   const updateUser = async () => {
//   const res = await axios.put(
//     id,
//     { 
//       data: {
//         ...user,
//          "user_email": email,
//       },
//     }
//   );
//   return res.data;
// };




  
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


