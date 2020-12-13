import React, {useState} from "react";
import { getNameLanguage} from "../../utils/switch"

export default function UserInput() {
    const [state, setstate] = useState("tatianatorog@SpeechGrammarList.com")
    const [stat, setstates] = useState(false)

    const handleclick = ()=>{
        setstates(true)
    }
  return (
    <>
    {/* <button onClick={handleclick()}></button> */}
     
       
        <input type="text" id="fname" name="fname"></input>
        <br></br>
        
        <input type="text" id="lname" name="lname"  value={state} onChange={stat === true? (e => setstate(e.target.value )):undefined} disabled={stat} ></input>
        <br></br>
        <input type="submit" value="Submit"></input>
    
      {/* <h1>{getNameLanguage(user.language_code)}</h1> */}
    </>
    
  );
}
