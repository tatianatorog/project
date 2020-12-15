import React, { useState, useEffect } from "react";
import { getNameLanguage } from "../../utils/switch";

export default function UserInput({ user }) {
  const [state, setstate] = useState("tatianatorog@SpeechGrammarList.com");
  const [states, setstates] = useState(false);
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

  //let props= { id: 'time', type: 'text', disabled:true};
  //let mor= { id: 'time', value:"hola" ,type :"date" };

  return (
    <>
      {states === false ? (
        <>
          <label htmlFor="email">email</label>
          <input disabled type="email" name="email" value={user.user_email} />
          <label htmlFor="timeZone">Time Zone</label>
          <input disabled type="text" name="timeZone" value={user.displayed_timezone} />
          <label htmlFor="theme">Theme</label>
          <input disabled type="text" name="theme" value={user.theme_name} />
          <label htmlFor="Language">Language</label>
          <input disabled type="text" name="theme" value={user.language_code} />
        </>
      ) : (
        <>
        <label htmlFor="email">email</label>
          <input type="email" value={user.user_email} />
          <label htmlFor="timeZone">Time Zone</label>
          <select name="cars" id="cars">
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="mercedes">Mercedes</option>
            <option value="audi">Audi</option>
          </select>
        </>
      )}

      <button onClick={() => setstates(true)}>hola</button>
    </>
  );
}
