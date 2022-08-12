const { User, Character } = require('../models');
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    // query logged in user
    // ISSUES WITH VERIFICATION
    me: async(parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id })
          .select('-__v -password')
          .populate('characters')
          .populate('partyMembers')
        
        return userData;
      }
      throw new AuthenticationError('Not Logged In')
    },

    // query all users
    users: async () => {
      return User.find()
        .select('-__v -password')
        .populate('partyMembers')
        .populate('characters')
    },

    // query single user
    user: async(parent, { username }) => {
      return User.findOne({ username })
        .select('-__v -password')
        .populate('partyMembers')
        .populate('characters')
    },

    // query all character builds
    characters: async(parent, { username }) => {
      const params = username ? { username } : {};
      return Character.find(params)
    },

    // query single character
    character: async(parent, { _id }) => {
      return Character.findOne({ _id })
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
    },

    // ISSUES WITH VERIFICATION
    addCharacter: async(parent, args, context) => {
      if (context.user) {
        const character = await Character.create({ ... args, username: context.user.username });

        await User.findByIdAndUpdate(
          { _id: context.user._id },
          { $push: { characters: character._id } },
          { new: true }
        );
        return character
      }
      throw new AuthenticationError('You need to be logged in to create a character')
    },

    // add comments
    // ISSUES WITH VERIFICATION
    addComment: async(parent, { characterId, commentBody }, context) => {
      if(context.user) {
        const updatedCharacter = await Character.findOneAndUpdate(
          { _id: characterId },
          { $push: { comments: { commentBody, username: context.user.username } } },
          { new: true, runValidators: true}
        );
        return updatedCharacter
      }
    },

    // add partymembers
    addPartyMember: async(parent, { partyMemberId }, context) => {
      if (context.user) {
        const updatedUser = await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { partyMembers: partyMemberId } },
          { new: true }
        ).populate('partyMembers');

        return updatedUser
      }
      throw new AuthenticationError('You need to be logged in')
    }
  }
}

module.exports = resolvers;