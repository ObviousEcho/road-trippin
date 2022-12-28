import { gql } from "@apollo/client";

export const QUERY_ME = gql`
  query Me {
    me {
      _id
      username
      email
      posts {
        _id
        title
        postBody
        createdAt
        postAuthor
      }
    }
  }
`;

export const QUERY_POSTS = gql`
  query Me {
    posts {
      _id
      title
      postBody
      postAuthor
      createdAt
    }
  }
`;

export const QUERY_SINGLE_POST = gql`
  query Post($postId: ID!) {
    post(postId: $postId) {
      _id
      title
      postBody
      postAuthor
      createdAt
    }
  }
`;

export const QUERY_TRIPS = gql`
  query Trips($tripname: String!) {
    trips(tripname: $tripname) {
      _id
      tripname
      posts {
        _id
        title
      }
    }
  }
`;

export const QUERY_TRIP = gql`
  query Trip($tripId: ID!) {
    trip(tripId: $tripId) {
      _id
      title
      postBody
      postAuthor
      createdAt
    }
  }
`;
