const { Schema, model } = require('mongoose');

const spendingSchema = new Schema(
    {
      amount: {
        type: Number,
        required: true,
      },
      timeSubmitted: {
        type: Date,
        default: Date.now,
        required: true,
        // TO DO: add date formatting
      },
      purchaseDescription: {
        type: String,
        maxlength: 50,
        minlength: 3,
        default: 'Spending category',
      },
    },
    // set this to use virtual below
    // {
    //   toJSON: {
    //     virtuals: true,
    //   },
    // }
  );

  module.exports = spendingSchema;