import React from "react";
import Select from "react-select";
import "./Selector.scss";
//Component  for  selector is implemente with the library "react-select"

export default function Selector({
 id,
  options,
  onChange,
  defaultValue,
}) {
  return (
    <>
      <Select
        id={id}
        defaultValue={defaultValue}
        onChange={onChange}
        options={options}
        theme={(theme) => ({
          ...theme,

          colors: {
            ...theme.colors,
            primary: "#00ABE5",
          },
        })}
      />
    </>
  );
}
