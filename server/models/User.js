const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');
const Budget = require('./Budget');

const userSchema = new Schema(
    {
      username: {
        type: String,
        required: true,
        unique: true,
      },
      email: {
        type: String,
        required: true,
        unique: true,
        match: [/.+@.+\..+/, 'Must use a valid email address'],
      },
      password: {
        type: String,
        required: true,
      },
      // this will allow weekly budget to be added to user and become part of user history
      budgets:[{
        type: Schema.Types.ObjectId,
        ref: 'Budget',
      }], 
    },

    // set this to use virtual below
    {
      toJSON: {
        virtuals: true,
      },
    }
  );

  // hash user password
userSchema.pre('save', async function (next) {
    if (this.isNew || this.isModified('password')) {
      const saltRounds = 10;
      this.password = await bcrypt.hash(this.password, saltRounds);
    }
  
    next();
  });
  
  // custom method to compare and validate password for logging in
  userSchema.methods.isCorrectPassword = async function (password) {
    return bcrypt.compare(password, this.password);
  };

const User = model('User', userSchema);

  module.exports = User;