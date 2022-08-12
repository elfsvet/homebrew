const { Schema, model } = require('mongoose');
const commentSchema = require('./Comment');

const characterSchema = new Schema(
  {
    name: {
      type: String,
      required: 'Please provide a name for this character',
      minlength: 1,
      maxlength: 10
    },
    bio: {
      type: String,
      maxlength: 500
    },
    username: {
      type: String,
      required: true
    },
    strength: {
      type: Number,
      required: true,
      enum: ['15', '14', '13', '12', '10', '8']
    },
    dexterity: {
      type: Number,
      required: true,
      enum: ['15', '14', '13', '12', '10', '8']
    },
    constitution: {
      type: Number,
      required: true,
      enum: ['15', '14', '13', '12', '10', '8']
    },
    intelligence: {
      type: Number,
      required: true,
      enum: ['15', '14', '13', '12', '10', '8']
    },
    wisdom: {
      type: Number,
      required: true,
      enum: ['15', '14', '13', '12', '10', '8']
    },
    charisma: {
      type: Number,
      required: true,
      enum: ['15', '14', '13', '12', '10', '8']
    },
    comments: [commentSchema]
  },
  {
    toJSON: {
      getters: true
    }
  }
)

characterSchema.virtual('commentCount').get(function() {
  return this.comments.length;
})

const Character = model('Character', characterSchema);

module.exports = Character;