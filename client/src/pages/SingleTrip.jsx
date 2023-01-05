import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";

import PostList from "../components/PostList";
import PostForm from "../components/PostForm";

import { QUERY_TRIP } from "../utils/queries";

const TripPostForm = () => {
  const { tripname: tripParam } = useParams();

  const { loading, data } = useQuery(QUERY_TRIP, {
    variables: { tripname: tripParam },
  });

  const trip = data?.trip || {};

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <PostForm title={tripParam}/>
      <div>
        <h3 className="text-2xl">
          Posts associated with your trip to {tripParam}:
        </h3>
      </div>

      <div>
        <PostList posts={trip.posts} />
      </div>
    </div>
  );
};

export default TripPostForm;
