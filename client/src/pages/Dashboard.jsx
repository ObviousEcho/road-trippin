import { React, useState } from 'react';

import Map from '../components/Map.tsx';

// import { useParams } from 'react-router-dom';
// import { useQuery } from '@apollo/client';

// import CommentList from '../components/CommentList';
// import CommentForm from '../components/CommentForm';

// import { QUERY_TRIPS } from '../utils/queries';

const Dashboard = () => {
  // store input value from form - Start New Trip
  const [destination, setDestination] = useState('');
  const [destinationProps, setDestinationProps] = useState('');

  // form input change handler - Start New Trip
  const handleInputChange = (e) => {
    const { target } = e;
    const inputValue = target.value;
    setDestination(inputValue);
  };

  // form submit handler - Start New Trip
  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!destination) {
      return;
    }
    setDestinationProps(destination);
    setDestination('');
  };

  // // Use `useParams()` to retrieve value of the route parameter `:profileId`
  // const { tripsId } = useParams();

  // const { loading, data } = useQuery(QUERY_TRIPS, {
  //   // pass URL parameter
  //   variables: { tripsId: tripsId },
  // });

  // const trips = data?.trips || {};

  // if (loading) {
  //   return <div>Loading...</div>;
  // }

  return (
    <div>
      {/* Start New Trip */}
      <div className='grid grid-cols-2 gap-4'>
        <div className='map'>
          <Map destination={destinationProps} />
        </div>

        <div className='text-center mt-4'>
          <form className='w-full max-w-sm'>
            <div className='flex items-center border-b border-teal-500 py-2'>
              <input
                className='appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none align-middle flex items-center border-b border-teal-500'
                type='text'
                placeholder='Start New Trip'
                aria-label='Destination'
                value={destination}
                onChange={handleInputChange}
              ></input>
              <button
                className='flex-shrink-0 bg-blue-700 hover:bg-blue-800 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded-full'
                type='button'
                onClick={handleFormSubmit}
              >
                Let's Go!
              </button>
            </div>
          </form>
        </div>
      </div>
      {/* Past Trips */}
      {/* <div className='my-3'>
        <div className='bg-light py-4'>
          <blockquote
            className='p-4'
            style={{
              fontSize: '1.5rem',
              fontStyle: 'italic',
              border: '2px dotted #1a1a1a',
              lineHeight: '1.5',
            }}
          >
            {trips.tripname}
          </blockquote>
        </div>

        <div className='m-3 p-4' style={{ border: '1px dotted #1a1a1a' }}>
          <CommentForm tripsId={trips._id} />
        </div>
      </div> */}
    </div>
  );
};

export default Dashboard;
