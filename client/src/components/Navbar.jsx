import React from "react";
import Auth from "../utils/auth";

const AppNavbar = () => {
  return (
    <nav className="bg-dark py-4 px-6 flex justify-between items-center">
      <div className="flex items-center">
        <a href="/">
          <img
            src="/client/public/RTNavbarLogo.png"
            alt="Logo"
            className="w-8 h-8"
          />
          <span className="text-black font-bold text-2xl ml-2">
            Road Trippin'
          </span>
        </a>
      </div>
      <div className="flex items-center space-x-4">
        <a className="text-white font-bold py-2 px-4 rounded-full" href="/">
          Plan Your Trip
        </a>
        {/* if user is logged in show saved books and logout */}
        {Auth.loggedIn() ? (
          <>
            <a
              className="text-white font-bold py-2 px-4 rounded-full"
              href="/saved"
            >
              See Your Trips
            </a>
            <button
              className="text-white font-bold py-2 px-4 rounded-full"
              onClick={Auth.logout}
            >
              Logout
            </button>
          </>
        ) : (
          <a
            className="text-white font-bold py-2 px-4 rounded-full"
            href="/login"
          >
            Login/Sign Up
          </a>
        )}
      </div>
    </nav>
  );
};

export default AppNavbar;
