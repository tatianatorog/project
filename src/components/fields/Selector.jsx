import React,{useState} from 'react';
import Select from 'react-select';






export default function Selector ({options}) {

  const [state, setTimezone] = useState({})

 
  
  const changeTimezone = state => {
    
    setTimezone({state});
    console.log(`Option selected:`, state.value);
  };
  
  const { value } = state
// 

//  const colourStyles = {
//  control: styles => ({ ...styles, backgroundColor: 'white' }),
// /option: styles => ({ ...styles, backgroundColor: 'yellow' }),
  
//  };
  
const COLORS = {
  blues:'#00ABE5', 
}


// console.log(label)
  return( 
    

    
      <Select
      placeholder="bogota"
        value={value}
        onChange={changeTimezone}
        options={options}
        classNamePrefix="hola"
        
          theme={theme => ({
      ...theme,
     
      colors: {
        ...theme.colors,
        primary:COLORS.blues,
      },
    })}
        // styles={colourStyles}
      />
    );
  
}
