import React from "react";
import { Link } from "react-router-dom";
import Auth from "../utils/auth";

const AppNavbar = () => {
  return (
    <nav className="bg-dark py-4 px-6 flex justify-between items-center">
      <div className="flex items-center">
        <Link to="/">
          <img
            src="/client/public/Road Trippin'-.png"
            alt="Logo"
            className="w-8 h-8"
          />
          <span className="text-white font-bold text-2xl ml-2">
            Road Trippin'
          </span>
        </Link>
      </div>
      <div className="flex items-center space-x-4">
        <Link className="text-white font-bold py-2 px-4 rounded-full" to="/">
          Plan Your Trip
        </Link>
        {/* if user is logged in show saved books and logout */}
        {Auth.loggedIn() ? (
          <>
            <Link
              className="text-white font-bold py-2 px-4 rounded-full"
              to="/saved"
            >
              See Your Trips
            </Link>
            <button
              className="text-white font-bold py-2 px-4 rounded-full"
              onClick={Auth.logout}
            >
              Logout
            </button>
          </>
        ) : (
          <Link
            className="text-white font-bold py-2 px-4 rounded-full"
            to="/login"
          >
            Login/Sign Up
          </Link>
        )}
      </div>
    </nav>
  );
};

export default AppNavbar;
