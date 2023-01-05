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
        <section className="text-center mt-4">
          <form>
            <label className="text-xl">Where to?</label>
            <br />
            <input
              value={destination}
              name="destination"
              type="text"
              placeholder="search"
              className="border-4 pl-3 align-middle mt-3"
              onChange={handleInputChange}
            />
            <br />
            <button
              className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none font-medium text-sm rounded-lg px-5 py-2.5 text-center m-5"
              onClick={handleFormSubmit}
            >
              Submit
            </button>
          </form>
        </section>
      </div>
      <Outlet />
    </>
  );
};

export default Home;
