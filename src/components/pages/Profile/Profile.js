import React, { useEffect, useState } from "react";
import axios from "../../../axios";
import UserHeader from "../../UserHeader/UserHeader";
import UserInput from "../../fields/UserInput";

const getUsers = async () => {
  const res = await axios.get(
    "http://localhost:8010/api/v1/customerdata/291db290-3aee-4c21-84c3-528076b0d0b7/"
  );
  return res.data.data;
};

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
  const [user, setUser] = useState({});
 

  
  const id = "671f7698-9846-4357-8954-0e0028472bc3";

  useEffect(() => {
    async function fetchData() {
      const requests = await axios.get(id);
      // const { ENABLED_FEATURES, ...all } = requests.data.data;
      // return setUser({ ENABLED_FEATURES, ...all });
      setUser(requests.data.data)
    }
    fetchData();
  }, [id]);

  
  return (
    <>
      <div className="user-profile">
        {Object.entries(user).length > 0 ? (
          <>
            <UserHeader user={user} />

            <UserInput user={user}></UserInput>
          </>
        ) : null}
      </div>
    </>
  );
}

// replaceAll("-", "/")
