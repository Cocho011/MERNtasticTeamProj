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
      example: {
      // user it applies to
      },
    },
    // set this to use virtual below
    // {
    //   toJSON: {
    //     virtuals: true,
    //   },
    // }
  );

const Spending = model('Spending', thoughtSchema);

module.exports = Spending;