import React, { useEffect, useState } from "react";

import Button from "../../components/FormElements/Button/Button";
import Input from "../../components/FormElements/Input/Input";
import Card from "../../components/UIElement/Card/Card";
import { useForm } from "../../hooks/form-hook";
import { VALIDATOR_REQUIRE } from "../../util/validators";
import "./UpdatePost.css";

//PROPS.ITEMS && props.blogId
function UpdatePost(props) {
  const [test, setTest] = useState(false);
  const [formState, inputHandler, setFormData] = useForm(
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

  const identifiedBlog = props.items.find((p) => p.id === props.blogId);

  useEffect(() => {
    if (identifiedBlog) {
      setFormData(
        {
          title: {
            value: identifiedBlog.title,
            isValid: true,
          },
          description: {
            value: identifiedBlog.description,
            isValid: true,
          },
        },
        true
      );
      setTest(true);
    }
  }, [setFormData, identifiedBlog]);

  if (!identifiedBlog || identifiedBlog.length === 0) {
    return (
      <div className="center">
        <Card>
          <h2>Could not find place!</h2>
        </Card>
      </div>
    );
  }

  const updateInputHandler = (event) => {
    event.preventDefault();
    //window.location.reload();
    console.log(formState);
  };

  return (
    <div className="updatePost">
      {test && (
        <form className="updatePostWrapper" onSubmit={updateInputHandler}>
          <img className="updatePostImg" src={identifiedBlog.image} alt="" />
          <Input
            id="title"
            element="input"
            type="text"
            label="Title"
            validators={[VALIDATOR_REQUIRE()]}
            errorText="Please enter a valid title."
            onInput={inputHandler}
            initialValue={formState.inputs.title.value}
            initialValid={formState.inputs.title.isValid}
          />
          <div className="updatePostInfo">
            <span className="updatePostAuthor">
              Autor: <b>{identifiedBlog.creator}</b>
            </span>
            <span className="updatePostDate">1 hour ago</span>
          </div>
          <Input
            id="description"
            element="textarea"
            label="Description"
            rows={25}
            validators={[VALIDATOR_REQUIRE()]}
            errorText="Please enter a valid description (min. 5 characters)."
            onInput={inputHandler}
            initialValue={formState.inputs.description.value}
            initialValid={formState.inputs.description.isValid}
          />
          <div className="singlePostButton">
            <Button type="submit" danger onClick={props.onClick}>
              CANCEL
            </Button>
            <Button type="submit" disabled={!formState.isValid}>
              UPDATE
            </Button>
          </div>
        </form>
      )}
    </div>
  );
}

export default UpdatePost;
