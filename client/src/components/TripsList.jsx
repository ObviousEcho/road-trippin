import React from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import Auth from '../utils/auth';
import { QUERY_TRIPS } from '../utils/queries.js';

const TripsList = ({ tripname }) => {
  if (!tripname.length) {
    return <h3>No Trips Yet</h3>;
  }

  return (
    <div>
      {/* If the user is logged in, render the form. Otherwise, display a message prompting the user to login or sign up */}
      {Auth.loggedIn() ? (
        <>
          {/* Display error message, if any
          <p className={`m-0 ${error ? 'text-danger' : ''}`}>
            {error && <span className='ml-2'>{error}</span>}
          </p> */}
        </>
      ) : (
        <p>
          You need to be logged in to view past trips. Please{' '}
          <Link to='/login'>login</Link> or <Link to='/signup'>signup.</Link>
        </p>
      )}

      <h3
        className='p-5 display-inline-block'
        style={{ borderBottom: '1px dotted #1a1a1a' }}
      >
        Trips
      </h3>
      <div className='flex-row my-4'>
        {trips &&
          trips.map((tripname) => (
            <div key={trips._id} className='col-12 mb-3 pb-3'></div>
          ))}
      </div>
    </div>
  );
};

export default TripsList;
