import React, { useState } from "react";
import Switch from "./Switch";

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
  const [coun, setCoun] = useState(1);

  const { CERTIFICATES_INSTRUCTOR_GENERATION } = user;
let hola =true;
const rango  =hola?(count >=0 && count <3): count===0;
const limit = hola? 3: 1;
const decrease = hola? (count >= 1):(count === 1) ;


  const handleChange2 = (instructor, setInstructor, cant, rango, decrease) => {


    if (instructor && count === cant) {
      setInstructor(instructor);
    }
    if (!instructor && rango ) {
      setCount(count + 1);
      setInstructor(!instructor);
    }
    if (instructor && decrease) {
      setCount(count - 1);
      setInstructor(!instructor);
    }
  };


 
  const handleChange =(instructor, setInstructor, cant, rang, decrease)=>
  {
    if (hola){
       return handleChange2 (instructor, setInstructor, cant, rang, decrease)
    }
    if (!hola){
      return handleChange2 (instructor, setInstructor, cant, rang, decrease)
    }

  }





  // };

  

  // console.log(instructor);
  console.log(count);

  const Instructor = () => {
    let hola = 0;
    setInstructor(!instructor);
    if (instructor) {
      hola = hola + 1;
      //   }else if(!instructor && count ===1){
      //       console.log("hola")
      //     }
      //   else if(instructor && count ===1 ){
      //     hola=-1
    }
    return hola;
  };

  const changeBackground = () => {
    setBackground(!background);
    if (!background) {
      setCount(count + 1);
    }
    if (background && count === 1) {
      setCount(count - 1);
    }
  };

  // let hola=0;

  //  const handleChanges2 =()=>{

  //   if (values===true && value===true){
  //     hola=2
  //   }
  //   else if(values){
  //     hola=1
  //   }  else if(value){
  //     hola=1
  //   }else {
  //     hola=0
  //   }
  //  return hola
  // }

  // const handleChanges3 = () => {
  //   if (instructor || courseware || course || dashboard || edxnotes) {
  //     setBackground(background);
  //   } else {
  //     setBackground(background);
  //   }
  // };

  // (handleChanges2())
  console.log(count);

  return (
    <div className="app">
      <Switch
        id="instructor"
        isOn={instructor}
        handleToggle={() => handleChange(instructor, setInstructor, limit, rango, decrease)}
      />
      <Switch
        id="background"
        isOn={background}
        handleToggle={() => handleChange(background, setBackground,limit, rango, decrease)}
      />
      <Switch
        id="courseware"
        isOn={courseware}
        handleToggle={() => handleChange(courseware, setCourseware, limit, rango, decrease)}
      />
      <Switch
        id="course"
        isOn={course}
        handleToggle={() => handleChange(course, setCourse, limit, rango, decrease)}
      />
      <Switch
        id="dashboard"
        isOn={dashboard}
        handleToggle={() => handleChange(dashboard, setDashboard, limit, rango, decrease)}
      />
      <Switch
        id="edxnotes"
        isOn={edxnotes}
        handleToggle={() => handleChange(edxnotes, setedxnotes, limit, rango, decrease)}
      />
    </div>
  );
}
