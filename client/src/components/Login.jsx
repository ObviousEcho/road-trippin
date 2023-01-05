import React, { useState } from "react";
import { Link } from "react-router-dom"; // import Link from react-router-dom
// import validateEmail from "../utils/helpers";
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../utils/mutations";
import Auth from "../utils/auth";


const Login = () => {
  // Create a state variable for the form state and a setter function
  const [formState, setFormState] = useState({
    email: "",
    password: "",
  });
  // Declare the LOGIN_USER mutation
  const [login, { error, data }] = useMutation(LOGIN_USER);

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
    console.log(formState);

    // Extract the values from the form state
    // const { email, password } = formState;

    // Check that the email and password are valid
    // if (!validateEmail(email) || !password) {
    //   setError("Invalid credentials!");
    //   return;
    // }

    try {
      // Execute the LOGIN_USER mutation
      const { data } = await login({ variables: { ...formState } });
      console.log(data); // log the data returned by the mutation

      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }
    // Reset the form state
    setFormState({
      email: "",
      password: "",
    });
  };

  return (
    <div>
      <h1 className="text-center text-2xl mt-3 pt-3 border-t-4">Login</h1>
      <div>
        {data ? (
          <p>
            Success! You may now head <Link to="/">back to the homepage.</Link>
          </p>
        ) : (
          <form>
            <label for="email" className="text-xl">
              <h6>Email:</h6>
            </label>
            <input
              value={formState.email}
              name="email"
              placeholder="Email"
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

export default Login;
