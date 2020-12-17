import React, { useState } from "react";
import Switch from "./Switch";
import  "./Feature.scss"

export default function Features({ user }) {
  const featuresValues = Object.values(user);
  const filter = featuresValues.filter((value) => value === true).length;
  console.log(filter);

  const [instructor, setInstructor] = useState(featuresValues[0]);
  const [background, setBackground] = useState(featuresValues[1]);
  const [courseware, setCourseware] = useState(featuresValues[2]);
  const [course, setCourse] = useState(featuresValues[3]);
  const [dashboard, setDashboard] = useState(featuresValues[4]);
  const [edxnotes, setedxnotes] = useState(featuresValues[5]);
  const [count, setCount] = useState(filter);
 


  let hola = true;
  const rango = hola ? count >= 0 && count < 3 : count === 0;
  const limit = hola ? 3 : 1;
  const decrease = hola ? count >= 1 : count === 1;

  const handleChange2 = (instructor, setInstructor, cant, rango, decrease) => {
    if (instructor && count === cant) {
      setInstructor(instructor);
    }
    if (!instructor && rango) {
      setCount(count + 1);
      setInstructor(!instructor);
    }
    if (instructor && decrease) {
      setCount(count - 1);
      setInstructor(!instructor);
    }
  };

  const handleChange = (instructor, setInstructor, cant, rang, decrease) => {
    if (hola) {
      return handleChange2(instructor, setInstructor, cant, rang, decrease);
    }
    if (!hola) {
      return handleChange2(instructor, setInstructor, cant, rang, decrease);
    }
  };

  

  return (
    <div className="app">
      <div className="user-features">
      <p>Features</p>
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
        <p>Enable Course Discovery</p>
        <Switch
          id="course"
          isOn={course}
          handleToggle={() =>
            handleChange(course, setCourse, limit, rango, decrease)
          }
        />
      </div>
      <div className="container-switch">
        <p>ENABLE COURSE DISCOVERY </p>
        <Switch
          id="dashboard"
          isOn={dashboard}
          handleToggle={() =>
            handleChange(dashboard, setDashboard, limit, rango, decrease)
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
      </div>
    </div>
  );
}
