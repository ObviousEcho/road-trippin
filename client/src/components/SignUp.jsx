import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { ADD_USER } from "../utils/mutations";
// import validateEmail from "../utils/helpers";
import Auth from "../utils/auth";

const SignUp = () => {
  // Create a state variable for the form state and a setter function
  const [formState, setFormState] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [addUser, { error, data }] = useMutation(ADD_USER);
  // const [error, setError] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    // Update the form state using the setter function
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    // Extract the values from the form state
    // const { username, email, password } = formState;

    // Check that all form fields are filled out and valid
    // if (!username || !validateEmail(email) || !password) {
    //   setError("Invalid credentials!");
    //   return;
    // }

    // Add the new user to the database
    try {
      const { data } = await addUser({
        variables: { ...formState },
      });

      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }

    // Reset the form state
    setFormState({
      username: "",
      email: "",
      password: "",
    });
  };

  return (
    <div>
      <h1 className="text-center text-2xl mt-3 pt-3 border-t-4">Sign Up</h1>
      <div>
        {data ? (
          <p>
            Success! You may now head <Link to="/">back to the homepage.</Link>
          </p>
        ) : (
          <form onSubmit={handleFormSubmit}>
            {/* Add label and input for username */}
            <label htmlFor="username" className="text-xl">
              <h6>Username:</h6>
            </label>
            <input
              id="username"
              value={formState.username}
              name="username"
              placeholder="Username"
              type="text"
              className="border w-full h-8 my-2"
              onChange={handleInputChange}
            />
            {/* Add label and input for email */}
            <label htmlFor="email" className="text-xl">
              <h6>Email:</h6>
            </label>
            <input
              id="email"
              value={formState.email}
              name="email"
              placeholder="Email"
              type="email"
              className="border w-full h-8 my-2"
              onChange={handleInputChange}
            />
            {/* Add label and input for password */}
            <label htmlFor="password" className="text-xl">
              <h6>Password:</h6>
            </label>
            <input
              id="password"
              value={formState.password}
              name="password"
              placeholder="Password"
              type="password" // Change type from "text" to "password"
              className="border w-full h-8 my-2"
              onChange={handleInputChange}
            />
            {/* Change button text to reflect intended action */}
            <button
              className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none font-medium text-sm rounded-lg px-5 py-2.5 text-center my-5"
              type="submit" // Add type attribute to submit form
            >
              Sign Up
            </button>
          </form>
        )}
        {error && (
          <div>
            <p>{error}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SignUp;
