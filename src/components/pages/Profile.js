import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import axios from "../../axios";
import "./Profile.css";
// import {getUserInfoById} from "../../request"

import * as request from "../../request";

const getUsers = async () => {
  const res = await axios.get(
    "http://localhost:8010/api/v1/customerdata/291db290-3aee-4c21-84c3-528076b0d0b7/"
  );
  return res.data.data;
};
// const updateUser = async () => {
//   const res = await axios.put(
//     "http://localhost:8010/api/v1/customerdata/291db290-3aee-4c21-84c3-528076b0d0b7/",
//     {
//       data: {
//         SUBSCRIPTION: "free",
//         //  "CREATION_DATE": "2013-03-10T02:00:00Z",
//         //  "LAST_PAYMENT_DATE": "2010-01-10T09:25:00Z",
//         //  "theme_name": "Tropical Island",
//         //  "ENABLED_FEATURES": {
//         //      "CERTIFICATES_INSTRUCTOR_GENERATION": true,
//         //      "INSTRUCTOR_BACKGROUND_TASKS": true,
//         //      "ENABLE_COURSEWARE_SEARCH": true,
//         //      "ENABLE_COURSE_DISCOVERY": true,
//         //      "ENABLE_DASHBOARD_SEARCH": true,
//         //      "ENABLE_EDXNOTES": true,
//         //  },
//         //  "language_code": "en",
//         //  "banner_message": "<p><span>Welcome</span> to Mr X's website</p>",
//         //  "displayed_timezone": "America/Bogota",
//         //  "user_profile_image": "https://i.imgur.com/LMhM8nn.jpg",
//         //  "user_email": "barack@aol.com",
//       },
//     }
//   );
//   return res.data;
// };

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

// console.log(updateUser())

export default function Profile() {
  const [user, setUser] = useState({});

  // const getUser = async () => {
  //   const res = await request.getUserInfoById("291db290-3aee-4c21-84c3-528076b0d0b7");
  //   const hola= res.data
  //   setUser(hola );

  // };
  // const capitalizeFirstLetter= (string) => string.charAt(0).toUpperCase() + string.SUBSCRIPTION.slice(1);

  function capitalizeFirstLetter(string) {
    return string.replace(/^./, string[0].toUpperCase());
  }

  let id = "671f7698-9846-4357-8954-0e0028472bc3";
  useEffect(() => {
    async function fetchData() {
      const requests = await axios.get(id);
      return setUser(requests.data.data);
    }
    fetchData();
  }, [id]);

  function hola(string) {
    // user.SUBSCRIPTION.includes("world")
    if (Object.keys(string).length > 0) {
      console.log("yes");
    } else {
      console.log("no");
    }
  }
  console.log(hola(user));

  //  str.slice(0, 9);

  // cleanText = strInputCode.replace(/<\/?[^>]+(>|$)/g, "");

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
                <p>Creation Date: {user.CREATION_DATE.slice(0, 10)}</p>
                {user.SUBSCRIPTION === "premium" ? (
                  <p>
                    Last payment date: {user.LAST_PAYMENT_DATE.slice(0, 10)}
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

// replaceAll("-", "/")
