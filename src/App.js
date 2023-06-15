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
    } else if (parseInt(formValues.day) <= 0 || parseInt(formValues.day) > 31) {
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
      parseInt(formValues.month) <= 0 ||
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
      parseInt(formValues.year) <= 10 ||
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

    let today = new Date();
    //birthay has 'Dec 25 1998'
    let birthdate = new Date(
      `${formData.month} ${formData.day} ${formData.year}`
    );
    //difference in milliseconds
    let diff = today.getTime() - birthdate.getTime();
    //convert milliseconds into years
    let year = Math.floor(diff / 31556736000);
    //1 day has 86400000 milliseconds
    let days_diff = Math.floor((diff % 31556736000) / 86400000);
    //1 month has 30.4167 days
    let month = Math.floor(days_diff / 30.4167);

    let day = Math.floor(days_diff % 30.4167);

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
