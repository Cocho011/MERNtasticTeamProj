const { Schema, model } = require('mongoose');

const spendingSchema = new Schema(
    {
      amount: {
        type: Number,
        required: true,
      },
      timeSubmitted: {
        type: String,
      },
      purchaseDescription: {
        type: String,
        maxlength: 50,
        minlength: 3,
        default: 'Spending category',
      },
    },
    // set this to use virtual below
    {
      toJSON: {
        virtuals: true,
      },
    }
  );

  module.exports = spendingSchema;