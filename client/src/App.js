import { React, useState } from "react";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import SingleTrip from "./pages/SingleTrip";
import Modal from "./components/Modal";
import NavBar from "./components/Navbar.jsx";

const client = new ApolloClient({
  uri: "/graphql",
  cache: new InMemoryCache(),
});

function App() {
  // modal control
  const [showModal, setShowModal] = useState(false);

  return (
    <ApolloProvider client={client}>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/trips/:tripId" element={<SingleTrip />} />
          </Route>
        </Routes>
        <Modal isVisible={showModal} onClose={() => setShowModal(false)} />
      </Router>
    </ApolloProvider>
  );
}

export default App;
