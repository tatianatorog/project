import React, { useState, useRef } from "react";
import userId from "../../utils/userId";
import Selector from "../Selector/Selector";
import axios from "../../axios";
import dataTimeZone from "./timeZones";
import themeList from "./theme";
import {languageList } from "./language";
import Switch from "../../components/switch/Switch";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./UserInput.scss";

export default function UserInput({ user }) {
  //This is going to be the initial value of the counter
  const featuresValues = Object.values(user.ENABLED_FEATURES)
  const featuresLength = featuresValues.filter((value) => value === true).length;
  
  const [email, setEmail] = useState(user.user_email);
  const [timezone, setTimezone] = useState({});
  const [theme, setTheme] = useState({});
  const [language, setLanguage] = useState({});
  const [instructor, setInstructor] = useState(featuresValues[0]);
  const [background, setBackground] = useState(featuresValues[1]);
  const [courseware, setCourseware] = useState(featuresValues[2]);
  const [course, setCourse] = useState(featuresValues[3]);
  const [dashboard, setDashboard] = useState(featuresValues[4]);
  const [edxnotes, setedxnotes] = useState(featuresValues[5]);
  const [count, setCount] = useState(featuresLength);
  const [validate, setValidate] = useState(true);
  const [error, setErrorEmail] = useState("");

  
  //---------------------------------------------------//---------------------

  //Functions to set the current value of the inputs

  const inputEmail = useRef(null);
  const changeEmail = () => setEmail(inputEmail.current.value);
  const changeTheme = (theme) => setTheme(theme);
  const changeLanguage = (language) => setLanguage(language);
  const changeTimezone = (timezone) => {
    setTimezone(timezone);
    //console.log(`Option selected:`, timezone.value);
  };

  // Function that valid that email inserted by the user is correct from a regular expression

  const validateEmail = () => {
    let regex = /\S+@\S+\.\S+/;
    if (regex.test(email)) {
      setErrorEmail("");
      setValidate(true);
    } else {
      setValidate(false);
      setErrorEmail("Please check you email");
    }
  };

  // Functions to define the default value of the the inputs  from the user data
  const defaultTheme = themeList.findIndex((x) => x.value === user.theme_name);
  const defaultLanguage = languageList.findIndex(
    (x) => x.value === user.language_code
  );
  const defaultTimezone = dataTimeZone.findIndex(
    (x) => x.value === user.displayed_timezone
  );

  //-------------------------Features--------------------------------//
  const rank = user.SUBSCRIPTION === "basic" ? count >= 0 && count < 3 : count === 0;
  const limitValue = user.SUBSCRIPTION === "basic" ? count === 3 : count === 1;
  // const decreaseValue = user.SUBSCRIPTION === "basic" ? count >= 1 : count === 1;

  const handleChangeSwitch = (active, setActive) => {
    if (active && limitValue) {
      setActive(active);   
    }
    if (!active && rank) {
      setCount(count + 1);
      setActive(!active);
      
    }
    if (active) {
      setActive(!active);
      setCount(count - 1);
    
    }
  };



  const handleChange = (active, setActive) => {
    if (user.SUBSCRIPTION === "free"|| user.SUBSCRIPTION === "basic") {
      return handleChangeSwitch(active, setActive);
    }
   
    if (user.SUBSCRIPTION === "premium") {
      const handleTogglePremium =(active, setActive) => setActive(!active);
      return  handleTogglePremium(active, setActive)

    }
  };

  // Popup to notify that the changes were saved or not.
  const notify = () => toast("Changes saved !");
  const notifyError = () => toast.error("Please check your email!");

  //Function to update user data in the api.The axios library is used to make the request.

  const updateUserInfo = async () => {
    const res = await axios.put(userId, {
      data: {
        ...user,
        user_email: email,
        language_code: language.value ? language.value : user.language_code,
        displayed_timezone: timezone.value
          ? timezone.value
          : user.displayed_timezone,
        theme_name: theme.value ? theme.value : user.theme_name,
        ENABLED_FEATURES: {
          CERTIFICATES_INSTRUCTOR_GENERATION: instructor,
          INSTRUCTOR_BACKGROUND_TASKS: background,
          ENABLE_COURSEWARE_SEARCH: courseware,
          ENABLE_COURSE_DISCOVERY: course,
          ENABLE_DASHBOARD_SEARCH: dashboard,
          ENABLE_EDXNOTES: edxnotes,
        },
      },
    });
    return res.data.data;
  };

  // Function that allows updating the user's information if the email field is valid
  const updateUser = () => {
    if (!validate) {
      notifyError();
    } else {
      notify();
      updateUserInfo();
    }
  };

  // Array of objects that has the values of the props used for the switch component

  const dataSelector = [
    {
      htmlFor: "timeZone",
      defaultValue: dataTimeZone[defaultTimezone],
      options: dataTimeZone,
      onChange: changeTimezone,
      text: "Time Zone",
    },
    {
      htmlFor: "theme",
      defaultValue: themeList[defaultTheme],
      options: themeList,
      onChange: changeTheme,
      text: "Theme",
    },
    {
      htmlFor: "Language",
      defaultValue: languageList[defaultLanguage],
      options: languageList,
      onChange: changeLanguage,
      text: "Language",
    },
  ];

  // Array of objects that has the values of the props used for the switch components.
  
  const featuresData = [
    {
      htmlFor: "instructor",
      text: "Certificates Instructor",
      id: "instructor",
      isOn: instructor,
      handleToggle: () =>
        handleChange(instructor, setInstructor),
    },
    {
      htmlFor: "courseware",
      text: "Enable Courseware Search",
      id: "courseware",
      isOn: courseware,
      handleToggle: () =>
        handleChange(courseware, setCourseware),
    },
    {
      htmlFor: "edxnotes",
      text: "Enable Edxnotes",
      id: "edxnotes",
      isOn: edxnotes,
      handleToggle: () =>
        handleChange(edxnotes, setedxnotes),
    },
    {
      htmlFor: "dashboard",
      text: "Enable dashboard",
      id: "dashboard",
      isOn: dashboard,
      handleToggle: () =>
        handleChange(dashboard, setDashboard),
    },
    {
      htmlFor: "background",
      text: "Instructor Background Tasks",
      id: "background",
      isOn: background,
      handleToggle: () =>
        handleChange(background, setBackground),
    },
    {
      htmlFor: "course",
      text: "Enable Course Discovery",
      id: "course",
      isOn: course,
      handleToggle: () =>
        handleChange(course, setCourse),
    },
  ];

const userMessage = { 
    "free":"With your subscription  you can turn on 1 of the features",
    "basic":"with your subscription level you can choose to change up to 3 features",
    "premium":"with your subscription level you can choose all the features you want",
  }




  //---------------------------//--------------------------------------------//

  return (
    <div className="user-form">
      <div className="user-form-btn-save" type="submit" onClick={updateUser}>
        <span className="user-form-save-span">Save</span>
        <i className="fas fa-user-lock"></i>
        <ToastContainer />
      </div>
      <div className="user-edit">
        <label className="user-input-label" htmlFor="email">
          Email
        </label>
        <input
          className="user-input-field user-email"
          type="email"
          name="email"
          ref={inputEmail}
          value={email}
          onChange={changeEmail}
          onMouseOut={validateEmail}
        />
        {!validate ? (
          <p className={!validate ? "wrong" : "correct"}>{error}</p>
        ) : null}
        {dataSelector.map((item, i) => (
          <>
            <label
              key={item.htmlFor+i}
              className="user-input-label"
              htmlFor={item.htmlFor}
            >
              {item.text}
            </label>
            <Selector key={`selector${i}`} id={item.htmlFor}
              defaultValue={item.defaultValue}
              options={item.options}
              onChange={item.onChange}
            ></Selector>
          </>
        ))}
      </div>
      <div className="user-switch">
        <div className="user-features">
        <p className="user-features-text">{userMessage[user.SUBSCRIPTION]}</p>
          {featuresData.map((item, i) => (
            <>
              <div key={`item${i}`} className="container-switch">
                <label key={`label${i}`} className="user-input-label" htmlFor={item.htmlFor}>
                  {item.text}
                </label>
                <Switch key={`feature${i}`}
                  id={item.id}
                  isOn={item.isOn}
                  handleToggle={item.handleToggle}
                />
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
}
