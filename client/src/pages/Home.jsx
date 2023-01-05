import { React, useState } from "react";
import Map from "../components/Map.tsx";
import { Outlet } from "react-router-dom";

const Home = () => {
  // store input value from form
  const [destination, setDestination] = useState("");
  const [destinationProps, setDestinationProps] = useState("");

  // form input change handler
  const handleInputChange = (e) => {
    const { target } = e;
    const inputValue = target.value;
    setDestination(inputValue);
  };

  // form submit handler
  const handleFormSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (!destination) {
      return;
    }
    setDestinationProps(destination);
    setDestination("");
  };
  return (
    <>
      <div className="grid md:grid-cols-2 gap-4">
        <div className="map">
          <Map destination={destinationProps} />
        </div>
        
        <section
          className="text-center mt-4"
          // style={{
          //   marginTop: "-1px",
          //   backgroundImage: `url('/RoadtripStickers.jpg')`,
          //   backgroundPosition: "7%",
          //   backgroundSize: "150%",
          //   paddingRight: "60px",
          //   paddingTop: "-0px",
          //   backgroundClip: "content-box",
          //   backgroundOrigin: "border-box",
          //   height: "100%",
          // }}
        >
          <form
            // style={{
            //   backgroundColor: "white",
            //   width: "500px",
            //   paddingTop: "30px",
            //   paddingRight: "0px",
            //   margin: "350px auto",
            //   display: "block",
            //   boxShadow: "0 0 50px rgba(0, 0, 0, 0.5)",
            //   opacity: .95,
            // }}
            className="mt-6"
          >
            <label className="text xl text-4xl font-bold">
              Plan Your Next Road Trip!
            </label>
            <br />
            <input
              value={destination}
              name="destination"
              type="text"
              placeholder="search"
              className="border-4 pl-3 align-middle mt-3 text-xl w-80"
              onChange={handleInputChange}
            />
            <br />
            <button
              className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none font-medium text-lg rounded-lg py-4 px-10 text-center m-5"
              onClick={handleFormSubmit}
            >
              Let's Go
            </button>
          </form>
        </section>
      </div>
      <Outlet />
    </>
  );
};

export default Home;
