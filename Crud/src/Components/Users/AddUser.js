import React from "react";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import Button from "../UI/Button";
import { useState } from "react";
import ErrorModel from "../UI/ErrorModel";
import Wrapper from "../Helpers/Wrapper";
import { useRef } from "react";

const AddUser = (props) => {
  const NameInputRef = useRef();
  const AgeInputRef = useRef();

  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();
    console.log(NameInputRef.current.value);
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: "Invalid Input",
        message: "Please Enter Name And Age",
      });
      return;
    }
    if (+enteredAge < 1) {
      setError({
        title: "Invalid Age",
        message: "Please Enter Valid Age",
      });
      return;
    }
    props.onAddUser(enteredUsername, enteredAge);
    setEnteredUsername("");
    setEnteredAge("");
  };

  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <Wrapper>
      {error && (<ErrorModel title={error.title} message={error.message} onConfirm={errorHandler} />)}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Name</label>
          <input id="username" type="text" value={enteredUsername} onChange={usernameChangeHandler} ref={NameInputRef} />
          <label htmlFor="age">Age</label>
          <input id="age" type="number" value={enteredAge} onChange={ageChangeHandler} ref={AgeInputRef} />
          <Button type="submit">Submit</Button>
        </form>
      </Card>
    </Wrapper>
  );
};

export default AddUser;
