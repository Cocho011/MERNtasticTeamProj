const { Schema, model } = require('mongoose');

const budgetSchema = new Schema(
    {
      amount: {
        type: Number,
        required: true,
      },
      weekDate: {
        type: Date,
        required: true,
        default: Date.now,
        // TO DO: add date formatting
      },
    },
    // set this to use virtual below
    // {
    //   toJSON: {
    //     virtuals: true,
    //   },
    // }
  );

  module.exports = budgetSchema;