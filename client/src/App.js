import React from "react";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Home from "./pages/Home";
import Trips from "./pages/Trips";
import SingleTrip from "./pages/SingleTrip";
import Modal from "./components/Modal";

const client = new ApolloClient({
  uri: "/graphql",
  cache: new InMemoryCache(),
});

function App() {
  const [showModal, setShowModal] = useState(false);

  return (
    <ApolloProvider client={client}>
      <Router>
        <div>
          <div className="p-10 text-center">
            <h1 className="text-3xl">
              Create Custom Modal in React JS with Tailwind CSS!
            </h1>
            <button
              className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none font-medium text-sm rounded-lg px-5 py-2.5 text-center mr-5"
              // onClick required to display modal, place on link in navbar, the above code can be deleted!
              onClick={() => setShowModal(true)}
            >
              Submit
            </button>
          </div>
        </div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/trips" element={<Trips />} />
            <Route path="/trips/:tripId" element={<SingleTrip />} />
          </Routes>
          <Modal isVisible={showModal} onClose={() => setShowModal(false)} />
      </Router>
    </ApolloProvider>
  );
}

export default App;
