const { User, Character } = require('../models');
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    // query all users
    users: async () => {
      return User.find()
        .select('-__v -password')
        .populate('partyMembers')
        .populate('characters')
    }
  },

  Mutation: {
    // add user to the website
    addUser: async(parent, args) => {
      const user = await User.create(args);
      const token = signToken(user)

      return { token, user };
    },

    // login functionality
    login: async(parent, { email, password }) => {
      const user = await User.findOne({ email });

      if(!user) {
        throw new AuthenticationError('Incorrect Credentials')
      }

      const correctPw = await user.isCorrectPassword(password)

      if(!correctPw) {
        throw new AuthenticationError('Incorrect Credentials')
      }

      const token = signToken(user);
      return { token, user }
    }
  }
}

module.exports = resolvers