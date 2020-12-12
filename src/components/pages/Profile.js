import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import axios from "../../axios";
// import {getUserInfoById} from "../../request"

import * as request from "../../request";

const getUsers = async () => {
  const res = await axios.get(
    "http://localhost:8010/api/v1/customerdata/291db290-3aee-4c21-84c3-528076b0d0b7/"
  );
  return res.data.data;
};
const updateUser = async () => {
  const res = await axios.put(
    "http://localhost:8010/api/v1/customerdata/291db290-3aee-4c21-84c3-528076b0d0b7/",
    {
      data: {
        SUBSCRIPTION: "free",
        //  "CREATION_DATE": "2013-03-10T02:00:00Z",
        //  "LAST_PAYMENT_DATE": "2010-01-10T09:25:00Z",
        //  "theme_name": "Tropical Island",
        //  "ENABLED_FEATURES": {
        //      "CERTIFICATES_INSTRUCTOR_GENERATION": true,
        //      "INSTRUCTOR_BACKGROUND_TASKS": true,
        //      "ENABLE_COURSEWARE_SEARCH": true,
        //      "ENABLE_COURSE_DISCOVERY": true,
        //      "ENABLE_DASHBOARD_SEARCH": true,
        //      "ENABLE_EDXNOTES": true,
        //  },
        //  "language_code": "en",
        //  "banner_message": "<p><span>Welcome</span> to Mr X's website</p>",
        //  "displayed_timezone": "America/Bogota",
        //  "user_profile_image": "https://i.imgur.com/LMhM8nn.jpg",
        //  "user_email": "barack@aol.com",
      },
    }
  );
  return res.data;
};

const onSubmit = async () => {
  await axios.post("http://localhost:8010/api/v1/customerdata/", {
    data: {
      SUBSCRIPTION: "basic",
      CREATION_DATE: "2013-03-10T02:00:00Z",
      LAST_PAYMENT_DATE: "2010-01-10T09:25:00Z",
      theme_name: "Tropical Island",
      ENABLED_FEATURES: {
        CERTIFICATES_INSTRUCTOR_GENERATION: true,
        INSTRUCTOR_BACKGROUND_TASKS: true,
        ENABLE_COURSEWARE_SEARCH: true,
        ENABLE_COURSE_DISCOVERY: true,
        ENABLE_DASHBOARD_SEARCH: true,
        ENABLE_EDXNOTES: true,
      },
      language_code: "en",
      banner_message: "<p><span>Welcome</span> to Mr X's website</p>",
      displayed_timezone: "America/Bogota",
      user_profile_image: "https://i.imgur.com/LMhM8nn.jpg",
      user_email: "barack@aol.com",
    },
  });
};

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
  let id = "291db290-3aee-4c21-84c3-528076b0d0b7";
  useEffect(() => {
    async function fetchData() {
      const requests = await axios.get(id);
      return setUser(requests.data.data);
    }
    fetchData();
  }, [id]);

  console.log(user);
  return (
    <>
      <div className="profile">
        Profile
        <h1>hola</h1>
        <div>
          <img src="" alt="" />
          <h2>Name</h2>
        </div>
        <div>
          <p>{user.SUBSCRIPTION}</p>
          <p>Subscription:</p>
          <p>Subscription:</p>
        </div>
      </div>
    </>
  );
}
