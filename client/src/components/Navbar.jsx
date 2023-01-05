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

  // const saveTrip = () => {}
  //   const handleSaveTrip = (e) => {
  //     e.preventDefault();

  //     // Check if the user is logged in
  //     if (Auth.loggedIn()) {
  //       // Save the trip
  //       saveTrip();
  //     } else {
  //       // Show the modal
  //       setIsModalOpen(true);
  //     }
  //   };

  return (
    <nav className="bg-dark py-0 px-0 sm:grid sm: grid-col-1 md:flex md:justify-between md:items-center">
      <div className="flex-initial w-62 h-50 ">
        <a href="/">
          <img src="/RTNavbarLogo5.png" alt="Logo" />
          {/* <span className="text-black font-bold text-2xl ml-2">
            Road Trippin'
          </span> */}
        </a>
      </div>
      <div className="sm:my-3 flex flex-initial justify-center">
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
              style={{
                fontSize: "20px",
                borderRadius: "40px",
                boxShadow: "0 0 0 2px black",
                paddingRight: "40px",
                transform: "translateX(-140px)",
              }}
              className="text-black font-bold py-6 px-8 rounded-full hover:bg-black hover:text-white"
              href="/dashboard"
            >
              Trips
            </a>
            <button
              style={{
                fontSize: "20px",
                borderRadius: "40px",
                boxShadow: "0 0 0 2px black",
                paddingRight: "40px",
                transform: "translateX(-140px)",
              }}
              className="text-black font-bold py-6 px-8 rounded-full hover:bg-black hover:text-white"
              onClick={Auth.logout}
            >
              Logout
            </button>
          </>
        ) : (
          <a
            style={{
              fontSize: "20px",
              borderRadius: "40px",
              boxShadow: "0 0 0 2px black",
              paddingRight: "40px",
              transform: "translateX(-140px)",
            }}
            className="text-black font-bold py-6 px-8 rounded-full hover:bg-black hover:text-white"
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
