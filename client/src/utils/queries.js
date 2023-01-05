import { gql } from "@apollo/client";

export const QUERY_POSTS = gql`
  query Posts {
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
      comments {
        _id
        commentText
        commentAuthor
        createdAt
      }
    }
  }
`;

export const QUERY_TRIPS = gql`
  query Trips {
    trips {
      _id
      tripname
    }
  }
`;

export const QUERY_TRIP = gql`
  query Trip($tripname: String!) {
    trip(tripname: $tripname) {
      tripname
      posts {
        _id
        title
        postBody
        postAuthor
        createdAt
        comments {
          commentText
        }
      }
    }
  }
`;
