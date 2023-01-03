import Auth from "../utils/auth";
import Modal from "./Modal.jsx";
import { useState } from "react";

const AppNavbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    console.log("handleClick called");
    console.log("isModalOpen:", isModalOpen);
    setIsModalOpen(true);
  };
  
const saveTrip = () => {}
  const handleSaveTrip = (e) => {
    e.preventDefault();

    // Check if the user is logged in
    if (Auth.loggedIn()) {
      // Save the trip
      saveTrip();
    } else {
      // Show the modal
      setIsModalOpen(true);
    }
  };

  return (
    <nav className="bg-dark py-0 px-0 flex justify-between items-center">
      <div className="flex-initial w-62 h-50 ">
        <a href="/">
          <img
            src="/RTNavbarLogo5.png"
            alt="Logo"
            
          />
          {/* <span className="text-black font-bold text-2xl ml-2">
            Road Trippin'
          </span> */}
        </a>
      </div>
      <div className="flex items-center space-x-4">
        {/* <a
          className="black font-bold py-2 px-4 rounded-full"
          href="/saved"
          onClick={handleSaveTrip}
        >
          Save Your Trip
        </a> */}

        {/* if user is logged in show saved trips and logout */}
        {Auth.loggedIn() ? (
          <>
            <a
              className="text-black font-bold py-2 px-4 rounded-full"
              href="/dashboard"
            >
              See Your Trips
            </a>
            <button
              className="text-black font-bold py-2 px-4 rounded-full"
              onClick={Auth.logout}
            >
              Logout
            </button>
          </>
        ) : (
          <a
            className="text-black font-bold py-6 px-8 rounded-full"
            href="/login"
            onClick={handleClick}
          >
            Login/Sign Up
          </a>
        )}
      </div>
      <Modal isVisible={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </nav>
  );
};

export default AppNavbar;
