import React from "react";
import "./Switch.scss";

const Switch = ({ isOn, handleToggle,id }) => {
  return (
    <>
      <input
        checked={isOn}
        onChange={handleToggle}
        className="react-switch-checkbox"
        id={`react-switch-new` +id}
        type="checkbox"
       
      />
      <label
        style={{ background: isOn && "#00ABE5" }}
        className="react-switch-label"
        htmlFor={`react-switch-new` +id}
      >
        <span className={`react-switch-button`} id={`span`+id} />
        
      </label>
    </>
  );
};

export default Switch;
