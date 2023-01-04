import { React, useState } from 'react';
// import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// import Map from './components/Map.tsx';

function inputDestination() {
  // store input value from form
  const [destination, setDestination] = useState('');
  //   const [destinationProps, setDestinationProps] = useState('');

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
}

const Dashboard = () => {
  return (
    <div>
      <div className='text-center mt-4'>
        <form class='w-full max-w-sm'>
          <div class='flex items-center border-b border-teal-500 py-2'>
            <input
              class='appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none align-middle'
              type='text'
              placeholder='Start New Trip'
              aria-label='Destination'
              value={destination}
              onChange={handleInputChange}
            ></input>
            <button
              class='flex-shrink-0 bg-blue-700 hover:bg-blue-800 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded-full'
              type='button'
              onClick={handleFormSubmit}
            >
              Let's Go!
            </button>
            <button
              class='flex-shrink-0 border-transparent border-4 text-teal-500 hover:text-teal-800 text-sm py-1 px-2 rounded'
              type='button'
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
      <div></div>
    </div>
  );
};

export default Dashboard;
