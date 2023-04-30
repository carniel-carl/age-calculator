import React from "react";
import "./Age.css";

const Age = (props) => {
  const { day, month, year } = props.data;
  return (
    <>
      <h3 className="subheading">
        <span className="age">{year} </span>years
      </h3>
      <h3 className="subheading">
        <span className="age">{month} </span>months
      </h3>
      <h3 className="subheading">
        <span className="age">{day} </span>days
      </h3>
    </>
  );
};

export default Age;
