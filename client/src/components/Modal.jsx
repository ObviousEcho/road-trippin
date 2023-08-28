import React from "react";
import Login from "./Login.jsx";
import SignUp from "./SignUp.jsx";

const Modal = ({ isVisible, onClose }) => {
  if (!isVisible) return null;

  const handleClose = (e) => {
    if (e.target.id === "wrapper" && e.target !== e.currentTarget) onClose();
  };

  const handleToggle = () => {
    let isChecked = document.getElementById("toggle").checked;
    const login = document.getElementById("login");
    const signup = document.getElementById("signup");

    if (isChecked) {
      login.setAttribute("class", "hidden");
      signup.removeAttribute("class");
    }

    if (!isChecked) {
      signup.setAttribute("class", "hidden");
      login.removeAttribute("class");
    }
  };

  return (
    <div
      style={{
        position: "fixed",
        zIndex: 10,
      }}
      id="wrapper"
      onClick={handleClose}
    >
      <div
        className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center"
        id="wrapper"
        onClick={handleClose}
      >
        <div className="w-[600px] flex flex-col">
          <button
            className="text-white text-xl place-self-end"
            onClick={() => onClose()}
          >
            X
          </button>
          <div className="bg-white p-2 rounded">
            <div className="flex  justify-center">
              <label className="inline-flex relative items-center cursor-pointer">
                <input
                  type="checkbox"
                  value=""
                  className="sr-only peer"
                  id="toggle"
                  onChange={handleToggle}
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                  Login/Sign Up
                </span>
              </label>
            </div>
            <div id="login">
              <Login />
            </div>
            <div id="signup" className="hidden">
              <SignUp />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
