import React from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import Auth from "../utils/auth";
import { QUERY_TRIPS } from "../utils/queries.js";

const TripsList = ({ tripname }) => {
  const { loading, error, data } = useQuery(QUERY_TRIPS);

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  return (
    <div>
      {/* If the user is logged in, render the form. Otherwise, display a message prompting the user to login or sign up */}
      {Auth.loggedIn() ? (
        <>
          <h3 className="text-2xl p-5">Trips:</h3>
          <div className="my-4">
            {data.trips &&
              data.trips.map((trip) => (
                <Link to={`/trips/${trip.tripname} ${trip._id}`} key={trip._id}>
                  <div className="col-12 border-2 mx-8 mb-3 py-3">
                    {trip.tripname}
                  </div>
                </Link>
              ))}
          </div>
        </>
      ) : (
        <p>
          You need to be logged in to view past trips. Please{" "}
          <Link to="/login">login</Link> or <Link to="/signup">signup.</Link>
        </p>
      )}
    </div>
  );
};

export default TripsList;
