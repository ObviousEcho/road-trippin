import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";

import PostList from "../components/PostList";
import PostForm from "../components/PostForm";

import { QUERY_TRIP } from "../utils/queries";

const TripPostForm = () => {
  const { tripname } = useParams();
  const arr = tripname.split(" ");
  const tName = arr[0];
  const tId = arr[1];

  const { loading, data } = useQuery(QUERY_TRIP, {
    variables: { tripname: tName },
  });

  const trip = data?.trip || {};
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="m-3">
      <PostForm title={tName} tripId={tId} />
      <div>
        <h3 className="text-2xl">
          Posts associated with your trip to {tName}:
        </h3>
      </div>

      <div>
        <PostList posts={trip.posts} />
      </div>
    </div>
  );
};

export default TripPostForm;
