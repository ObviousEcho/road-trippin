import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";

import { ADD_COMMENT } from "../../utils/mutations";

import Auth from "../../utils/auth";

const CommentForm = ({ thoughtId }) => {
  // Declare state variables for the comment text and error message
  const [commentText, setCommentText] = useState("");
  const [error, setError] = useState("");

  // Declare the ADD_COMMENT mutation
  const [addComment] = useMutation(ADD_COMMENT);

  // Function to handle form submission
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      // Execute the ADD_COMMENT mutation with the variables thoughtId, commentText, and commentAuthor
      await addComment({
        variables: {
          thoughtId,
          commentText,
          commentAuthor: Auth.getProfile().data.username,
        },
      });

      // Reset the comment text and error message
      setCommentText("");
      setError("");
    } catch (err) {
      console.error(err);
      setError(err.message);
    }
  };

  // Function to handle input change
  const handleChange = (event) => {
    const { name, value } = event.target;

    // Update the comment text if the name of the input is "commentText" and the length of the value is less than or equal to 280
    if (name === "commentText" && value.length <= 280) {
      setCommentText(value);
    }
  };

  return (
    <div>
      <h4>What are your thoughts on this thought?</h4>

      {/* If the user is logged in, render the form. Otherwise, display a message prompting the user to login or sign up */}
      {Auth.loggedIn() ? (
        <>
          {/* Display the character count and error message, if any */}
          <p className={`m-0 ${error ? "text-danger" : ""}`}>
            Character Count: {commentText.length}/280
            {error && <span className="ml-2">{error}</span>}
          </p>
          <form
            className="flex-row justify-center justify-space-between-md align-center"
            onSubmit={handleFormSubmit}
          >
            {/* Input for the comment text */}
            <div className="col-12 col-lg-9">
              <textarea
                name="commentText"
                placeholder="Add your comment..."
                value={commentText}
                className="form-input w-100"
                style={{ lineHeight: "1.5", resize: "vertical" }}
                onChange={handleChange}
                maxLength={280}
              ></textarea>
            </div>

            {/* Submit button */}
            <div className="col-12 col-lg-3">
              <button className="btn btn-primary btn-block py-3" type="submit">
                Add Comment
              </button>
            </div>
          </form>
        </>
      ) : (
        <p>
          You need to be logged in to share your thoughts. Please{" "}
          <Link to="/login">login</Link> or <Link to="/signup">signup.</Link>
        </p>
      )}
    </div>
  );
};

export default CommentForm;
