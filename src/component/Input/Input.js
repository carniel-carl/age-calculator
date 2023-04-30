import React, { useEffect, useRef, useState } from "react";
import "./Input.css";
import arrow from "../../images/icon-arrow.svg";

const Input = ({ handleChange, noError, errorMessage }) => {
  const initialValues = {
    day: "",
    month: "",
    year: "",
  };

  const inputRef = useRef(null);

  const [formValues, setFormValues] = useState(initialValues);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [inputRef]);

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    handleChange(formValues);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="input-details">
        <div className={errorMessage.day ? "input-error" : null}>
          <label htmlFor="day" className="date">
            day
          </label>
          <input
            type="number"
            placeholder="DD"
            name="day"
            value={formValues.day}
            onChange={changeHandler}
            ref={inputRef}
          />
          {!noError && <span className="error">{errorMessage.day}</span>}
        </div>

        <div className={errorMessage.month ? "input-error" : null}>
          <label htmlFor="month" className="date">
            month
          </label>

          <input
            type="number"
            placeholder="MM"
            name="month"
            value={formValues.month}
            onChange={changeHandler}
          />
          {!noError && <span className="error">{errorMessage.month}</span>}
        </div>

        <div className={errorMessage.year ? "input-error" : null}>
          <label htmlFor="year" className="date">
            year
          </label>
          <input
            type="number"
            placeholder="YYYY"
            name="year"
            value={formValues.year}
            onChange={changeHandler}
          />
          {!noError && <span className="error">{errorMessage.year}</span>}
        </div>
      </div>

      <div className="line"></div>

      <button type="submit">
        <img src={arrow} alt="arrow" aria-hidden="true" />
      </button>
    </form>
  );
};

export default Input;
