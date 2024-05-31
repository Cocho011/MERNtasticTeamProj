const { Schema, model } = require('mongoose');

const budgetSchema = new Schema(
    {
      amount: {
        type: Number,
        required: true,
      },
      date: {
        type: String,
        required: true,
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