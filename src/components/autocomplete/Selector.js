import React,{useState} from 'react';
import Select from 'react-select';
import dataTimeZone from './timeZones'

// const options = [
//   { value: 'chocolate/bogota', label: 'Chocolate/bogota' },
//   { value: 'strawberry', label: 'Strawberry' },
//   { value: 'vanilla', label: 'Vanilla' },
// ];

export default function Selector () {

  const [state, setTimezone] = useState({})

 
  
  const changeTimezone = state => {
    
    setTimezone({state});
    console.log(`Option selected:`, state.value);
  };
  
  const { value } = state
// 
// console.log(label)
  return( 
    

    
      <Select
      placeholder="bogota"
        value={value}
        onChange={changeTimezone}
        options={dataTimeZone}
      />
    );
  
}
