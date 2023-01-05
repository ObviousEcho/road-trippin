import React from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import Auth from '../utils/auth';
import { QUERY_TRIPS } from '../utils/queries.js';

const TripsList = ({ tripname }) => {
  const { loading, error, data } = useQuery(QUERY_TRIPS);

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  console.log(JSON.stringify(data));
  console.log(data);
  return (
    <div>
      {/* If the user is logged in, render the form. Otherwise, display a message prompting the user to login or sign up */}
      {Auth.loggedIn() ? (
        <></>
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
        {data.trips &&
          data.trips.map((item) => (
            <Link to={`/trips/${item.tripname}`} key={item._id}>
              <div className='col-12 mb-3 pb-3'> {item.tripname}</div>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default TripsList;
