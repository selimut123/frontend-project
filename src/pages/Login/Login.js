import React, {useContext} from "react";
import { useHistory } from "react-router-dom";

import Input from "../../components/FormElements/Input/Input";
import Button from "../../components/FormElements/Button/Button";
import Card from "../../components/UIElement/Card/Card";
import {
  VALIDATOR_EMAIL,
  VALIDATOR_MINLENGTH,
} from "../../util/validators";
import { useForm } from "../../hooks/form-hook";
import { AuthContext } from "../../context/auth-context";
import "./Login.css";

function Login() {
  const auth = useContext(AuthContext);
  const [formState, inputHandler] = useForm(
    {
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
    history.push("/user/register");
  }

  function SubmitHandler(event){
    event.preventDefault();
    console.log(formState);
    auth.login();
  }

  return (
    <React.Fragment>
      <div className="loginPage">
        <Card className="loginCard">
          <h2>Login</h2>
          <hr />
          <form onSubmit={SubmitHandler}>
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
              errorText="Please enter a valid password."
              onInput={inputHandler}
            />
            <Button type="submit" size={25} disabled={!formState.isValid}>
              LOG IN
            </Button>
          </form>
          <button className="switchButton" onClick={switchModeHandler}>
            Don't have an account yet? Create one
          </button>
        </Card>
      </div>
    </React.Fragment>
  );
}

export default Login;
