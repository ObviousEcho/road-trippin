import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_POST } from "../utils/mutations";
import Auth from "../utils/auth";

const PostForm = ({ title }) => {
  const [formState, setFormState] = useState("");

  const [addPost, { error }] = useMutation(ADD_POST);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name === "formState" && value.length <= 2000) {
      setFormState(value);
    }
  };

  const handleFormSubmit = async (event) => {
    event.prevenDefault();
    try {
      const { data } = await addPost({
        vairables: {
          title: title,
          postBody: formState,
        },
      });

      setFormState("");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <h4>Add a new post:</h4>
      {Auth.loggedIn() ? (
        <>
          <h5>Title: {title}</h5>
          <form onSubmit={handleFormSubmit}>
            <textarea
              name="formState"
              value={formState}
              placeholder="Travel blog!"
              className="border-2"
              onChange={handleInputChange}
            />
            <button className="border-2 m-3" type="submit">
              Post It!
            </button>
            {error && <div>{error.message}</div>}
          </form>
        </>
      ) : (
        <p>You must be logged in to Post!</p>
      )}
    </div>
  );
};

export default PostForm;
