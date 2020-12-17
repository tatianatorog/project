import React from 'react';
import Select from 'react-select';

export default function Selector ({options, timezone, onChange, defaultValue}) {
  
// const COLORS = {
//   blues:'#00ABE5;', 
// }


console.log(timezone, onChange)
  return( 
    
<>
    
      <Select
      defaultValue={defaultValue}
        value={timezone}
        onChange={onChange}
        options={options}
          theme={theme => ({
      ...theme,
     
      colors: {
        ...theme.colors,
        primary:'#00ABE5',
      },
    })}
   
      />
 
  </>
    );
    
  
}
