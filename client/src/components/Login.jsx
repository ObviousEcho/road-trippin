import React, { useState } from "react";
import validateEmail from "../utils/helpers";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === "email") {
      setEmail(inputValue);
    } else {
      setPassword(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!validateEmail(email) || !password) {
      setError("Invalid credentials!");
      return;
    }

    setEmail("");
    setPassword("");
  };

  return (
    <div>
      <h1 className="text-center text-2xl mt-3 pt-3 border-t-4">Login</h1>
      <form>
        <label for="email" className="text-xl">
          <h6>Email:</h6>
        </label>
        <input
          value={email}
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
          value={password}
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
