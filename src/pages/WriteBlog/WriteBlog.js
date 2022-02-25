import React, {useRef, useContext, useState, useEffect} from "react";
import { useHistory } from "react-router-dom";

import Input from "../../components/FormElements/Input/Input";
import Button from "../../components/FormElements/Button/Button";
import ErrorModal from "../../components/ErrorModal";
import LoadingSpinner from "../../components/UIElement/LoadingSpinner/LoadingSpinner";
import {
  VALIDATOR_REQUIRE,
} from "../../util/validators"
import { useForm } from "../../hooks/form-hook";
import { AuthContext } from "../../context/auth-context";
import { useHttpClient } from "../../hooks/http-hook";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import "./WriteBlog.css";

function WriteBlog() {
  const [file, setFile] = useState();
  const [previewUrl, setPreviewUrl] = useState();
  const [isValid, setIsValid] = useState();
  const filePickerRef = useRef();

  const auth = useContext(AuthContext);
  const { isLoading, error, sendRequest, clearError } = useHttpClient();

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
      image: {
        value: "",
        isValid: false,
      },
    },
    false
  );

  useEffect(()=> {
    if(!file){
      return;
    }
    const fileReader = new FileReader();
    fileReader.onload = () => {
      setPreviewUrl(fileReader.result);
    };
    fileReader.readAsDataURL(file);
  },[file]);

  function pickedHandler(event){
      let pickedFile;
      let fileIsValid = isValid;
      if (event.target.files && event.target.files.length === 1) {
        pickedFile = event.target.files[0];
        setFile(pickedFile);
        setIsValid(true);
        fileIsValid = true;
      } else {
        setIsValid(false);
        fileIsValid = false;
      }
      inputHandler("image", pickedFile, fileIsValid);
  }

  function pickImageHandler(){
    filePickerRef.current.click();
  }

  const history = useHistory();
  
  async function SubmitHandler(event) {
    event.preventDefault();
    try {
      const formData= new FormData();
      formData.append("title", formState.inputs.title.value);
      formData.append("description", formState.inputs.description.value);
      formData.append("creator", auth.userId);
      formData.append("image", formState.inputs.image.value);
      await sendRequest(
        "http://localhost:5000/api/blog/write",
        "POST",
        formData,
        {
          Authorization: "Bearer: " + auth.token,
        }
      );
      history.push('/');
    } catch (err) {}
  }

  return (
    <React.Fragment>
      <ErrorModal error={error} onClear={clearError} />
      <div className="write">
        {isLoading && <LoadingSpinner asOverlay />}
        <div className="writeImg">
          {previewUrl && <img src={previewUrl} alt="" />}
          {!previewUrl && <p>Please pick an image.</p>}
        </div>
        <form className="writeForm" onSubmit={SubmitHandler}>
          <div className="writeFormGroup">
            <input
              id={formState.id}
              ref={filePickerRef}
              style={{ display: "none" }}
              type="file"
              accept=".jpg,.png,.jpeg"
              onChange={pickedHandler}
            />
            {/* file input  */}
            <FontAwesomeIcon
              icon={faPlus}
              className="writeTitleIcon"
              onClick={pickImageHandler}
            />
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
    </React.Fragment>
  );
}

export default WriteBlog;
