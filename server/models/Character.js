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
    race: {
      type: String,
      required: 'Please provide the race of your character',
    },
    class: {
      type: String,
      required: 'Please pick a class for your character'
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
      enum: [15, 14, 13, 12, 10, 8],
      validate: {
        validator:
          function (value) {
            return this.dexterity !== value && this.constitution !== value && this.intelligence !== value && this.wisdom !== value && this.charisma !== value
          }
        ,
        message: "Error"
      }
    },
    dexterity: {
      type: Number,
      required: true,
      enum: [15, 14, 13, 12, 10, 8],
      validate: {
        validator:
          function (value) {
            return this.strength !== value && this.constitution !== value && this.intelligence !== value && this.wisdom !== value && this.charisma !== value
          }
        ,
        message: "Error"
      }
    },
    constitution: {
      type: Number,
      required: true,
      enum: [15, 14, 13, 12, 10, 8],
      validate: {
        validator:
          function (value) {
            return this.strength !== value && this.dexterity !== value && this.intelligence !== value && this.wisdom !== value && this.charisma !== value
          }
        ,
        message: "Error"
      }
    },
    intelligence: {
      type: Number,
      required: true,
      enum: [15, 14, 13, 12, 10, 8],
      validate: {
        validator:
          function (value) {
            return this.strength !== value && this.dexterity !== value && this.constitution !== value && this.wisdom !== value && this.charisma !== value
          }
        ,
        message: "Error"
      }
    },
    wisdom: {
      type: Number,
      required: true,
      enum: [15, 14, 13, 12, 10, 8],
      validate: {
        validator:
          function (value) {
            return this.strength !== value && this.dexterity !== value && this.constitution !== value && this.intelligence !== value && this.charisma !== value
          }
        ,
        message: "Error"
      }
    },
    charisma: {
      type: Number,
      required: true,
      enum: [15, 14, 13, 12, 10, 8],
      validate: {
        validator:
          function (value) {
            return this.strength !== value && this.dexterity !== value && this.constitution !== value && this.intelligence !== value && this.wisdom !== value
          }
        ,
        message: "Error"
      }
    },
    comments: [commentSchema]
  },
  {
    toJSON: {
      getters: true
    }
  }
)

characterSchema.virtual('commentCount').get(function () {
  return this.comments.length;
})

const Character = model('Character', characterSchema);

module.exports = Character;