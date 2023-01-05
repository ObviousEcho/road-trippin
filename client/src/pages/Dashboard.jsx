import React from "react";

import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import TripsList from "../components/TripsList";
import { QUERY_TRIPS } from "../utils/queries";

const Dashboard = () => {
  // Use `useParams()` to retrieve value of the route parameter `:profileId`
  const { tripsId } = useParams();

  const { loading, data } = useQuery(QUERY_TRIPS, {
    // pass URL parameter
    variables: { tripsId: tripsId },
  });

  const trips = data?.trips || {};

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {/* Past Trips */}
      <div>
        <ul
          className="grid gap-4 text-center mt-4 list-inside list-none"
        >
          <li>
            <TripsList tripname={trips.tripname} />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;

/* Start New Trip */

/* <div className='grid grid-cols-2 gap-4'>
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
</div> */
