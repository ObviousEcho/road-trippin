const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    username: String!
    email: String!
    password: String!
  }

  type Post {
    _id: ID
    title: String
    postBody: String
    postAuthor: String
    createdAt: String
    comments: [Comment]
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
    trips: [Trip]
    trip(tripname: String!): Trip
    posts(title: String!): [Post]
    post(postId: ID!): Post
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addPost(
      tripId: ID!
      title: String
      postBody: String
      postAuthor: String
    ): Post
    addComment(postId: ID!, commentText: String!, createdAt: String): Post
    removePost(postId: ID!): Post
    removeComment(postId: ID!, commentId: ID!): Post
  }
`;

module.exports = typeDefs;
