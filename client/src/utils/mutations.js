import { gql } from "@apollo/client";

export const ADD_USER = gql`
  mutation AddUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      user {
        username
        password
        email
      }
    }
  }
`;

export const LOGIN_USER = gql`
  mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      user {
        email
        password
      }
    }
  }
`;

export const ADD_POST = gql`
mutation AddPost($title: String!, $postBody: String!) {
  addPost(title: $title, postBody: $postBody) {
    _id
    title
    postBody
    postAuthor
    createdAt
    comments {
      _id
      commentText
    }
  }
}
`;

export const ADD_COMMENT = gql`
utation AddComment($postId: ID!, $commentText: String!) {
  addComment(postId: $postId, commentText: $commentText) {
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

export const REMOVE_POST = gql`
 
`;

export const REMOVE_COMMENT = gql``;
