import React, { useContext } from "react";
import { useHistory } from "react-router-dom";

import Card from "../../components/UIElement/Card/Card";
import Input from "../../components/FormElements/Input/Input";
import Button from "../../components/FormElements/Button/Button";
import { AuthContext } from "../../context/auth-context";
import { useHttpClient } from "../../hooks/http-hook";
import { useForm } from "../../hooks/form-hook";
import "./Register.css";
import {
  VALIDATOR_EMAIL,
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
} from "../../util/validators";
import ErrorModal from "../../components/ErrorModal";
import LoadingSpinner from "../../components/UIElement/LoadingSpinner/LoadingSpinner";

function Register() {
  const auth = useContext(AuthContext);
  const { isLoading, error, sendRequest, clearError } = useHttpClient();

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

  async function SubmitHandler(event) {
    event.preventDefault();
    console.log(formState);
    try{
      const responseData = await sendRequest(
        "http://localhost:5000/api/auth/signup",
        "POST",
        JSON.stringify({
          firstName: formState.inputs.FirstName.value,
          lastName: formState.inputs.LastName.value,
          email: formState.inputs.email.value,
          password: formState.inputs.password.value,
        }),
        {
          "Content-Type": "application/json",
        }
      );
      auth.login(responseData.userId, responseData.token);
    }catch(err){}
  }

  return (
    <React.Fragment>
      <ErrorModal error={error} onClear={clearError} />
      <div className="registerPage">
        <Card className="registerCard">
          {isLoading && <LoadingSpinner asOverlay/>}
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
              validators={[VALIDATOR_MINLENGTH(6)]}
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
