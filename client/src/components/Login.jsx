import React, { useState } from "react";
import { Link } from "react-router-dom"; // import Link from react-router-dom
import validateEmail from "../utils/helpers";
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../utils/mutations";

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
    setFormState((prevState) => ({
      ...prevState,
      [inputType]: inputValue,
    }));
    
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

      // Reset the form state
      setFormState({
        email: "",
        password: "",
      });

      // Navigate to a different page after a successful login
      <Link to="/trips" />;
    } catch (err) {
      console.error(err); // log any errors
      setError("Error logging in. Please try again.");
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
          placeholder="Email"
          type="text"
          className="border w-full h-8 my-2"
          onChange={handleInputChange}
        />
        <label for="password" className="text-xl">
          <h6>Password:</h6>
        </label>
        <input
          value={formState.password}
          name="password"
          placeholder="Password"
          type="text"
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
        <div>
          <p>{error}</p>
        </div>
      )}
    </div>
  );
};

export default Login;