import Auth from "../utils/auth";
import Modal from "./Modal.jsx";
import { useState } from "react";
import { Link } from "react-router-dom";

const AppNavbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    setIsModalOpen(true);
  };

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
        {/* if user is logged in show saved trips and logout */}
        {Auth.loggedIn() ? (
          <>
            <Link to="/trips">
              <p
                style={{
                  fontSize: "20px",
                  borderRpdius: "40px",
                  boxShadow: "0 0 0 2px black",
                  paddingRight: "40px",
                  transform: "translateX(-140px)",
                }}
                className="text-black font-bold py-6 px-8 rounded-full hover:bg-black hover:text-white"
              >
                Trips
              </p>
            </Link>
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
