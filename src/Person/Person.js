import React from "react";
import "./Person.css";

const person = props => {
  return (
    <div className="Person">
      <p onClick={props.onClick}>
        I'm a {props.name} and my age is {props.age} years old!
      </p>
      <p>{props.children}</p>
      <input type="text" onChange={props.onChange} value={props.value} />
    </div>
  );
};

export default person;
