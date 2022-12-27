const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    username: String!
    email: String!
    password: String!
    posts: [Post]!
  }

  type Post {
    _id: ID
    title: String!
    postBody: String!
    postAuthor: String!
    createdAt: String!
    comments: [Comment]!
  }

  type Comment {
    _id: ID
    commentText: String!
    commentAuthor: String!
    createdAt: String!
  }

  type Trip {
    _id: ID
    tripname: String!
    posts: [Post]
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
    posts(username: String): [Post]
    post(postId: ID!): Post
    trips(tripname: String!): [Trip]
    trip(tripId: ID!): Post
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addPost(title: String!, postBody: String!): Post
    addComment(postId: ID!, commentText: String!): Post
    removePost(postId: ID!): Post
    removeComment(postId: ID!, commentId: ID!): Post
  }
`;

module.exports = typeDefs;
