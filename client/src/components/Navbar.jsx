import Auth from "../utils/auth";
import Modal from "./Modal.jsx";
import { useState, React } from 'react';
 

const AppNavbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    console.log('handleClick called');
    setIsModalOpen(true);
    console.log('isModalOpen:', isModalOpen);

  };

  return (
    <nav className="bg-dark py-0 px-0 flex justify-between items-center">
      <div className="flex items-center">
        <a href="/">
          <img
            src="/RTNavbarLogo.png"
            alt="Logo"
            className="w-50 h-40 max-w-60 max-h-50"
          />
          {/* <span className="text-black font-bold text-2xl ml-2">
            Road Trippin'
          </span> */}
        </a>
      </div>
      <div className="flex items-center space-x-4">
        <a className="black font-bold py-2 px-4 rounded-full" href="/">
           Save Your Trip
        </a>
        {/* if user is logged in show saved trips and logout */}
        {Auth.loggedIn() ? (
          <>
            <a
              className="text-black font-bold py-2 px-4 rounded-full"
              href="/saved"
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
            className="text-black font-bold py-2 px-4 rounded-full"
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
