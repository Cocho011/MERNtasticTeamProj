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
      budgetId: {
        //Not entirely sure if the type is correct here for model ID
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId()
      },
    },
    // set this to use virtual below
    {
      toJSON: {
        virtuals: true,
      },
    }
  );

  module.exports = budgetSchema;