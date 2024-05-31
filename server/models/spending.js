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
      userId: {
        // this should hopefully run by ids for users in User schema
        type: Schema.Types.ObjectId,
        required: true,
        ref: {
          model: 'User',
          key: 'id'
        }
        // TO DO: default: [user from current session]
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