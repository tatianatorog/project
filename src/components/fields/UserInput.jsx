import React, { useState, useEffect } from "react";
import { getNameLanguage } from "../../utils/switch";
import Selector from "./Selector";
import axios from "../../axios"
import "./UserInput.scss"
import dataTimeZone from './timeZones' 

export default function UserInput({ user }) {
  const [states, setstates] = useState(false);
  const [email, setEmail] = useState(user.user_email);
  const [timezone, setTimezone] = useState(user.displayed_timezone);
  const [theme, setTheme] = useState(user.theme_name);
  const [language, setLanguage] = useState(user.language_code);
  
  const changeEmail = (e) => setEmail(e.currentTarget.value);
  const changeTimezone = (e) => setTimezone(e.currentTarget.value);
  const changeTheme = (e) => setTheme(e.currentTarget.value);
  const changelanguage = (e) => setLanguage(e.currentTarget.value);
 
 


  // const [ propsInput, setPropsInput] = useState({ id: 'time', type: 'text', disabled:true})
  // const [ propsInput, setPropsInput] = useState({ id: 'time', type: 'text', disabled:true})

  // theme_name: "Tropical Island",
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

  // const hola= Object.values(userFeatures)

  // .map(currency => Object.keys(currency)[0]);

  // console.log( hola
  //   )
  // const handleclick = ()=>{
  //     setstates(true)
  // }

  // const hello = () => {

  //   let props= { id: 'time', type: 'text', disabled:true};
  // let mor= { id: 'time', value:"hola" ,type :"date" };

  //   if(state=== true){
  //     props = { id: 'time', type: 'text', disabled:true};
  //   }else{
  //     mor = { id: 'time', type: 'time' };
  //   }

  // }
  // useEffect(() => {
  //   hello()

  //   }
  // , [state])

  //   const changeInput = ()=>{
  //      if(stat===true){
  //       setTypeInput(<input type="text" id="fname" disabled></input>)

  //     } else {
  //       setTypeInput(<input type="text" id="fname" ></input>)

  //   }
  // }

  //changeInput()
  const id = "671f7698-9846-4357-8954-0e0028472bc3/";

 
  
const updateUser = async () => {
  const res = await axios.put(
    id,
    { 
      data: {
        ...user,
         "user_email": email,
      },
    }
  );
  return res.data;
};
 

 



  return (
    <div className="user-form">
      {states === false ? (
        <>
        
        
          <label className="user-input-label" htmlFor="email">Email</label>
          <input className="user-input-field" type="email" name="email" value={email} onChange={changeEmail} />
        
         
          <label htmlFor="timeZone">Time Zone</label>

          <Selector options={dataTimeZone} ></Selector>
          <label htmlFor="theme">Theme</label>
          <Selector options={dataTimeZone} ></Selector>

          {/* <input
            disabled
            type="text"
            name="timeZone"
            value={timezone}
          /> */}
         
          
         
          
          <label htmlFor="Language">Language</label>
          <input
            disabled
            type="text"
            name="theme"
            value={getNameLanguage(language)}
          />
       
          <button onClick={() => setstates(true)}>edit</button>
        </>
      ) : (
        <>
          <label htmlFor="email">email </label>
          <input type="email" value={email} onChange={changeEmail}/>
          <label htmlFor="timeZone">Time Zone</label>
          
          <button onClick={updateUser}>save</button>
        </>
      )}
    </div>
  );
}
