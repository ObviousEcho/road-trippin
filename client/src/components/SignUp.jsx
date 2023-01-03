import React, { useState } from "react";
import { Link } from "react-router-dom"; // import Link from react-router-dom
import { useMutation } from "@apollo/client";
import { ADD_USER } from "../utils/mutations";
import validateEmail from "../utils/helpers";
import Auth from "../utils/auth";

const SignUp = () => {
  // Create a state variable for the form state and a setter function
  const [formState, setFormState] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  // Declare the ADD_USER mutation
  const [addUser] = useMutation(ADD_USER);

  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // Update the form state using the setter function
    setFormState({
      ...formState,
      [inputType]: inputValue,
    });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    // Extract the values from the form state
    const { username, email, password } = formState;

    // Check that all form fields are filled out and valid
    if (!username || !validateEmail(email) || !password) {
      setError("Invalid credentials!");
      return;
    }

    try {
      // Add the new user to the database
      const { data } = await addUser({
        variables: { ...formState },
      });

      Auth.login(data.addUser.token);

      // Navigate to a different page after a successful login
      <Link to="/dashboard" />;
    } catch (err) {
      console.error(err); // log any errors
      setError("Error Signing in. Please try again.");

      // Reset the form state
      setFormState({
        username: "",
        email: "",
        password: "",
      });
    }
  };

  return (
    <div>
      <h1 className="text-center text-2xl mt-3 pt-3 border-t-4">Sign Up</h1>
      <form>
        <label for="username" className="text-xl">
          <h6>Username:</h6>
        </label>
        <input
          value={formState.name}
          name="username"
          placeholder=" Your username"
          type="text"
          className="border w-full h-8 my-2"
          onChange={handleInputChange}
        />
        <label for="username" className="text-xl">
          <h6>Email:</h6>
        </label>
        <input
          value={formState.email}
          name="email"
          placeholder=" Your email"
          type="email"
          className="border w-full h-8 my-2"
          onChange={handleInputChange}
        />
        <label for="username" className="text-xl">
          <h6>Password:</h6>
        </label>
        <input
          value={formState.password}
          name="password"
          placeholder=" ******"
          type="password"
          className="border w-full h-8 my-2"
          onChange={handleInputChange}
        />
        <button
          className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none font-medium text-sm rounded-lg px-5 py-2.5 text-center my-5"
          onClick={handleFormSubmit}
        >
          Signup
        </button>
      </form>
      {error && <div className="my-3 p-3 bg-danger text-white">{error}</div>}
    </div>
  );
};

export default SignUp;
