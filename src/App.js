import { useState } from "react";
import "./App.css";
import Age from "./component/Age/Age";
import Card from "./component/Card/Card";
import Input from "./component/Input/Input";

function App() {
  const [data, setData] = useState({
    day: "- -",
    month: "- -",
    year: "- -",
  });

  const [noError, setNoError] = useState(true);
  const [errorMessage, setErrorMessage] = useState({});

  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth();
  const currentDay = currentDate.getDate();

  const inputHandler = (formValues) => {
    const errors = {};

    if (!formValues.day) {
      errors.day = "This field is required";
      setNoError(false);
      setData({
        day: "- -",
        month: "- -",
        year: "- -",
      });
    } else if (parseInt(formValues.day) < 0 || parseInt(formValues.day) > 31) {
      errors.day = "Must be a valid day";
      setNoError(false);
      setData({
        day: "- -",
        month: "- -",
        year: "- -",
      });
    }

    if (!formValues.month) {
      errors.month = "This field is required";
      setNoError(false);
      setData({
        day: "- -",
        month: "- -",
        year: "- -",
      });
    } else if (
      parseInt(formValues.month) < 0 ||
      parseInt(formValues.month) > 12
    ) {
      errors.month = "Must be a valid month";
      setNoError(false);
      setData({
        day: "- -",
        month: "- -",
        year: "- -",
      });
    }

    if (!formValues.year) {
      errors.year = "This field is required";
      setNoError(false);
      setData({
        day: "- -",
        month: "- -",
        year: "- -",
      });
    } else if (
      parseInt(formValues.year) < 900 ||
      parseInt(formValues.year) > currentYear
    ) {
      errors.year = "Must be a valid year";
      setNoError(false);
      setData({
        day: "- -",
        month: "- -",
        year: "- -",
      });
    }

    if (Object.keys(errors).length > 0) {
      setErrorMessage(errors);
    } else {
      setNoError(true);
      setErrorMessage({});
      setData(calculateAge(formValues));
    }
  };

  const calculateAge = (formData) => {
    const details = {};

    let birthdate = new Date(formData.year, formData.month - 1, formData.day);

    let year = currentYear - birthdate.getFullYear();
    let month = currentMonth - birthdate.getMonth();
    let day = currentDay - birthdate.getDate();

    // if the birthdate month and day are after the current month and day, subtract
    // one year from the age

    if (month < 0 || (month === 0 && day < 0)) {
      year--;
      if (month === 0) {
        month = 11;
      } else {
        month = 12 + month;
      }

      day = 30 + day;

      if (year < 0) {
        year = 0;
      }
    }

    details.day = day;
    details.month = month;
    details.year = year;

    return details;
  };

  return (
    <div className="App">
      <Card>
        <Input
          handleChange={inputHandler}
          noError={noError}
          errorMessage={errorMessage}
        />
        <Age data={data} />
      </Card>
    </div>
  );
}

export default App;
