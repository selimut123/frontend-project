import React from "react";
import { useHistory } from "react-router-dom";

import Card from "../../components/UIElement/Card/Card";
import Input from "../../components/FormElements/Input/Input";
import Button from "../../components/FormElements/Button/Button";
import { useForm } from "../../hooks/form-hook";
import "./Register.css";
import { VALIDATOR_EMAIL, VALIDATOR_MIN, VALIDATOR_REQUIRE } from "../../util/validators";

function Register() {

  //initialize the value and use custom hooks
  const [formState, inputHandler] = useForm(
    {
      FirstName: {
        value: "",
        isValid: false,
      },
      LastName: {
        value: "",
        isValid: false,
      },
      email: {
        value: "",
        isValid: false,
      },
      password: {
        value: "",
        isValid: false,
      },
    },
    false
  );
  const history = useHistory();

  function switchModeHandler() {
    history.push("/user/login");
  }

  function SubmitHandler(event) {
    event.preventDefault();
    console.log(formState);
  }

  return (
    <React.Fragment>
      <div className="registerPage">
        <Card className="registerCard">
          <h2>Register</h2>
          <hr />
          <form onSubmit={SubmitHandler}>
            <Input
              id="FirstName"
              type="text"
              element="input"
              label="First Name"
              validators={[VALIDATOR_REQUIRE()]}
              errorText="Please enter your first name."
              onInput={inputHandler}
            />
            <Input
              id="LastName"
              type="text"
              element="input"
              label="Last Name"
              validators={[VALIDATOR_REQUIRE()]}
              errorText="Please enter your last Name."
              onInput={inputHandler}
            />
            <Input
              id="email"
              type="text"
              element="input"
              label="Email"
              validators={[VALIDATOR_EMAIL()]}
              errorText="Please enter a valid email."
              onInput={inputHandler}
            />
            <Input
              id="password"
              type="password"
              element="input"
              label="Password"
              validators={[VALIDATOR_MIN(6)]}
              errorText="Please enter a password (min 6 characters)."
              onInput={inputHandler}
            />
            <Button type="submit" size={25} disabled={!formState.isValid}>
              SIGN UP
            </Button>
          </form>
          <button className="switchButton1" onClick={switchModeHandler}>
            Already have an account? Log in now.
          </button>
        </Card>
      </div>
    </React.Fragment>
  );
}

export default Register;
