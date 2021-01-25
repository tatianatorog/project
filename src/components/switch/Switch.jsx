import React from "react";
import "./Switch.scss";

const Switch = ({ isOn, handleToggle,id }) => {
  return (
    <>
      <input
        checked={isOn}
        onChange={handleToggle}
        className="react-switch-checkbox"
        id={id}
        type="checkbox"
       
      />
      <label
        style={{ background: isOn && "#00ABE5" }}
        className="react-switch-label"
        htmlFor={id}
      >
        <span className={`react-switch-button`} id={id} />
        
      </label>
    </>
  );
};

export default Switch;
