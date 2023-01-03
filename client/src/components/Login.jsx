import React, { useState } from "react";
import { Link } from "react-router-dom"; // import Link from react-router-dom
import validateEmail from "../utils/helpers";
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../utils/mutations";
import Auth from "../utils/auth";

const Login = () => {
  // Create a state variable for the form state and a setter function
  const [formState, setFormState] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  // Declare the LOGIN_USER mutation
  const [loginUser] = useMutation(LOGIN_USER);

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
    const { email, password } = formState;

    // Check that the email and password are valid
    if (!validateEmail(email) || !password) {
      setError("Invalid credentials!");
      return;
    }

    try {
      // Execute the LOGIN_USER mutation
      const { data } = await loginUser({ variables: { email, password } });
      console.log(data); // log the data returned by the mutation

      Auth.login(data.login.token);

      // Navigate to a different page after a successful login
      <Link to="/dashboard" />;
    } catch (err) {
      console.error(err); // log any errors
      setError("Error logging in. Please try again.");

      // Reset the form state
      setFormState({
        email: "",
        password: "",
      });
    }
  };

  return (
    <div>
      <h1 className="text-center text-2xl mt-3 pt-3 border-t-4">Login</h1>
      <form>
        <label for="email" className="text-xl">
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
        <label for="password" className="text-xl">
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
          Login
        </button>
      </form>
      {error && (
        <div className="my-3 p-3 bg-danger text-white">
          <p>{error.message}</p>
        </div>
      )}
    </div>
  );
};

export default Login;
