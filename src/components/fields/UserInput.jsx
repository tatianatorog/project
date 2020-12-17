import React, { useState } from "react";
import id from "../../utils/userId";
import Selector from "./Selector";
import axios from "../../axios";
import "./UserInput.scss";
import dataTimeZone from "./timeZones";
import themeList from "./theme";
import languageList from "./language";
import Switch from "../../components/switch/Switch";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function UserInput({ user }) {
  const [email, setEmail] = useState(user.user_email);
  const [timezone, setTimezone] = useState({});
  const [theme, setTheme] = useState({});
  const [language, setLanguage] = useState({});

  const featuresValues = Object.values(user.ENABLED_FEATURES);
  const filter = featuresValues.filter((value) => value === true).length;
  console.log(filter);

  const [instructor, setInstructor] = useState(featuresValues[0]);
  const [background, setBackground] = useState(featuresValues[1]);
  const [courseware, setCourseware] = useState(featuresValues[2]);
  const [course, setCourse] = useState(featuresValues[3]);
  const [dashboard, setDashboard] = useState(featuresValues[4]);
  const [edxnotes, setedxnotes] = useState(featuresValues[5]);
  const [count, setCount] = useState(filter);
  const [validate, setValidate] = useState(true);
  const [error, setError] = useState("");

  const changeEmail = (e) => setEmail(e.currentTarget.value);
  const changeTheme = (theme) => setTheme(theme);
  const changeLanguage = (language) => setLanguage(language);

  const validateEmail = (e) => {
    let re = /\S+@\S+\.\S+/;
    if (re.test(email)) {
      setError("");
      setValidate(true);   
    } else {
    
      setValidate(false);
      setError("Please check you email");
    }
  };

  const changeTimezone = (timezone) => {
    setTimezone(timezone);
    console.log(`Option selected:`, timezone.value);
  };

  const defaultTheme = themeList.findIndex((x) => x.value === user.theme_name);
  const defaultLanguage = languageList.findIndex(
    (x) => x.value === user.language_code
  );
  const defaultTimezone = dataTimeZone.findIndex(
    (x) => x.value === user.displayed_timezone
  );

  const rango =
    user.SUBSCRIPTION === "basic" ? count >= 0 && count < 3 : count === 0;
  const limit = user.SUBSCRIPTION === "basic" ? 3 : 1;
  const decrease = user.SUBSCRIPTION === "basic" ? count >= 1 : count === 1;

  const handleChangeSwitch = (active, setActive, limit, rango, decrease) => {
    if (active && count === limit) {
      setActive(active);
    }
    if (!active && rango) {
      setCount(count + 1);
      setActive(!active);
    }
    if (active && decrease) {
      setCount(count - 1);
      setActive(!active);
    }
  };

  const handleTogglePremium = (active, setActive) => setActive(!active);

  const handleChange = (active, setActive, limit, rango, decrease) => {
    if (user.SUBSCRIPTION === "free") {
      return handleChangeSwitch(active, setActive, limit, rango, decrease);
    }
    if (user.SUBSCRIPTION === "basic") {
      return handleChangeSwitch(active, setActive, limit, rango, decrease);
    }
    if (user.SUBSCRIPTION === "premium") {
      return handleTogglePremium(active, setActive);
    }
  };

  const notify = () => toast("Changes saved !");
  const notifyError = () => toast.error("Please check your email!");
  const updateUserinfo = async () => {
   
    const res = await axios.put(id, {
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

  const updateUser = () => {
    if (!validate) {
      notifyError();
    } else {
      notify();
      updateUserinfo();
    }
  };

  return (
    <div className="user-form">
      <div className="user-btn-save" type="submit" onClick={updateUser}>
        <span className="user-save">Save</span>
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
          value={email}
          onChange={changeEmail}
          onMouseOut={validateEmail}
        />
        {!validate ? (
          <p className={!validate ? "wrong" : "correct"}>{error}</p>
        ) : null}

        <label className="user-input-label" htmlFor="timeZone">
          Time Zone
        </label>
        <Selector
          defaultValue={dataTimeZone[defaultTimezone]}
          options={dataTimeZone}
          initial={timezone}
          onChange={changeTimezone}
        ></Selector>
        <label className="user-input-label" htmlFor="theme">
          Theme
        </label>
        <Selector
          options={themeList}
          initial={theme}
          onChange={changeTheme}
          defaultValue={themeList[defaultTheme]}
        ></Selector>
        <label className="user-input-label" htmlFor="Language">
          Language
        </label>
        <Selector
          defaultValue={languageList[defaultLanguage]}
          options={languageList}
          initial={language}
          onChange={changeLanguage}
        ></Selector>
      </div>
      <div className="user-switch">
        <div className="user-features">
          <p className="user-title-feature">Features</p>
          <div className="container-switch">
            <p>Certificates Instructor</p>
            <Switch
              id="instructor"
              isOn={instructor}
              handleToggle={() =>
                handleChange(instructor, setInstructor, limit, rango, decrease)
              }
            />
          </div>
          <div className="container-switch">
            <p>Enable Courseware Search </p>
            <Switch
              id="courseware"
              isOn={courseware}
              handleToggle={() =>
                handleChange(courseware, setCourseware, limit, rango, decrease)
              }
            />
          </div>
          <div className="container-switch">
            <p>Enable Edxnotes</p>
            <Switch
              id="edxnotes"
              isOn={edxnotes}
              handleToggle={() =>
                handleChange(edxnotes, setedxnotes, limit, rango, decrease)
              }
            />
          </div>
          <div className="container-switch">
            <p>Enable dashboard </p>
            <Switch
              id="dashboard"
              isOn={dashboard}
              handleToggle={() =>
                handleChange(dashboard, setDashboard, limit, rango, decrease)
              }
            />
          </div>
          <div className="container-switch">
            <p>Instructor Background Tasks</p>
            <Switch
              id="background"
              isOn={background}
              handleToggle={() =>
                handleChange(background, setBackground, limit, rango, decrease)
              }
            />
          </div>

          <div className="container-switch">
            <p>Enable Course Discovery</p>
            <Switch
              id="course"
              isOn={course}
              handleToggle={() =>
                handleChange(course, setCourse, limit, rango, decrease)
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
}
