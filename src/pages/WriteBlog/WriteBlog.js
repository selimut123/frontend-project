import React from "react";

import Input from "../../components/FormElements/Input/Input";
import Button from "../../components/FormElements/Button/Button";
import {
  VALIDATOR_REQUIRE,
} from "../../util/validators"
import { useForm } from "../../hooks/form-hook";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import "./WriteBlog.css";

function WriteBlog() {
  const [formState, inputHandler] = useForm(
    {
      title: {
        value: "",
        isValid: false,
      },
      description: {
        value: "",
        isValid: false,
      },
    },
    false
  );
  function SubmitHandler(event) {
    event.preventDefault();
    console.log(formState);
  }

  return (
    <div className="write">
      <img
        className="writeImg"
        src="https://cdn1.epicgames.com/offer/cbd5b3d310a54b12bf3fe8c41994174f/67cf271c-e9f8-4c9c-8b90-f542a8268052_2560x1440-e54afb0597bb192adc27b76629067318?h=270&resize=1&w=480"
        alt=""
      />
      <form className="writeForm" onSubmit={SubmitHandler}>
        <div className="writeFormGroup">
          {/* file input  */}
          <FontAwesomeIcon icon={faPlus} className="writeTitleIcon" />
          {/* title input */}
          <div className="writeInput">
            <Input
              id="title"
              element="input"
              type="text"
              placeholder="Title"
              validators={[VALIDATOR_REQUIRE()]}
              errorText="Please enter your title here."
              onInput={inputHandler}
            />
          </div>
        </div>
        <div className="writeFormGroup">
          {/* description input using text area */}
          <div className="writeInput">
            <Input
              id="description"
              element="textarea"
              type="text"
              placeholder="Tell your story"
              rows={15}
              validators={[VALIDATOR_REQUIRE()]}
              errorText="Please enter your description here."
              onInput={inputHandler}
            />
          </div>
        </div>
        {/* button to submit */}
        <div className="writeSubmit">
          <Button type="submit" size={25} disabled={!formState.isValid}>
            PUBLISH
          </Button>
        </div>
      </form>
    </div>
  );
}

export default WriteBlog;
