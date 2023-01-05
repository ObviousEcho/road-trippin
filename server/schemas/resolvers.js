const { AuthenticationError } = require("apollo-server-express");
const { User, Post, Trip } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    // me: async (parent, { username }, context) => {
    //   if (context.username) {
    //     return User.findOne(username);
    //   }
    //   throw new AuthenticationError("You need to be logged in!");
    // },

    trips: async () => {
      return Trip.find({});
    },

    trip: async (parent, { tripname }) => {
      return Trip.findOne({ tripname: tripname }).populate('posts');
    },

    posts: async (parent, { tripname }) => {
      const params = tripname ? { tripname } : {};
      return Post.find(params).sort({ createdAt: -1 });
    },

    post: async (parent, { postId }) => {
      return Post.findOne({ _id: postId });
    },
  },

  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
    },

    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("No user found with this email address");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const token = signToken(user);

      return { token, user };
    },

    addPost: async (parent, { title, postBody }, context) => {
      console.log(title, postBody, context.user)
      if (context.user) {
        const post = await Post.create({
          title,
          postBody,
          postAuthor: context.user.username,
        });

        // await User.findOneAndUpdate(
        //   { _id: context.user._id },
        //   { $addToSet: { posts: post._id } }
        // );

        return post;
      }
      throw new AuthenticationError("You need to be logged in!");
    },

    addComment: async (parent, { postId, commentText, createdAt }, context) => {
      if (context.user) {
        return Post.findOneAndUpdate(
          { _id: postId },
          {
            $addToSet: {
              comments: {
                commentText,
                commentAuthor: context.user.username,
                createdAt
              },
            },
          },
          {
            new: true,
            runValidators: true,
          }
        );
      }
      throw new AuthenticationError("You need to be logged in!");
    },

    removePost: async (parent, { postId }, context) => {
      if (context.user) {
        const post = await Post.findOneAndDelete({
          _id: postId,
          postAuthor: context.user.username,
        });

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { posts: post._id } }
        );

        return post;
      }
      throw new AuthenticationError("You need to be logged in!");
    },

    removeComment: async (parent, { postId, commentId }, context) => {
      if (context.user) {
        return Post.findOneAndUpdate(
          { _id: postId },
          {
            $pull: {
              comments: {
                _id: commentId,
                commentAuthor: context.user.username,
              },
            },
          },
          { new: true }
        );
      }
      throw new AuthenticationError("You need to be logged in!");
    },
  },
};

module.exports = resolvers;
