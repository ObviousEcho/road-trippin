import { React, useState } from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import SingleTrip from './pages/SingleTrip';
import Modal from './components/Modal';
import Map from './components/Map.tsx';
import NavBar from './components/Navbar.jsx';

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

function App() {
  // modal control
  const [showModal, setShowModal] = useState(false);
  // store input value from form
  const [destination, setDestination] = useState('');
  const [destinationProps, setDestinationProps] = useState('');

  // form input change handler
  const handleInputChange = (e) => {
    const { target } = e;
    const inputValue = target.value;
    setDestination(inputValue);
  };

  // form submit handler
  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!destination) {
      return;
    }
    setDestinationProps(destination);
    setDestination('');
  };

  return (
    <ApolloProvider client={client}>
      <Router>
        <div>
          <NavBar />
          <div className='grid grid-cols-2 gap-4'>
            <div className='map'>
              <Map destination={destinationProps} />
            </div>
            <section className='text-center mt-4'>
              <form>
                <label className='text-xl'>Where to?</label>
                <br />
                <input
                  value={destination}
                  name='destination'
                  type='text'
                  placeholder='search'
                  className='border-4 pl-3 align-middle mt-3'
                  onChange={handleInputChange}
                />
                <br />
                <button
                  className='text-white bg-blue-700 hover:bg-blue-800 focus:outline-none font-medium text-sm rounded-lg px-5 py-2.5 text-center m-5'
                  onClick={handleFormSubmit}
                >
                  Submit
                </button>
              </form>
              <section className='p-10 text-center'>
                <h1 className='text-3xl'>
                  Create Custom Modal in React JS with Tailwind CSS!
                </h1>
                <button
                  className='text-white bg-blue-700 hover:bg-blue-800 focus:outline-none font-medium text-sm rounded-lg px-5 py-2.5 text-center mr-5'
                  // onClick required to display modal, place on link in navbar, the above code can be deleted!
                  onClick={() => setShowModal(true)}
                >
                  Submit
                </button>
              </section>
            </section>
          </div>
        </div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/trips/:tripId' element={<SingleTrip />} />
        </Routes>
        <Modal isVisible={showModal} onClose={() => setShowModal(false)} />
      </Router>
    </ApolloProvider>
  );
}

export default App;
