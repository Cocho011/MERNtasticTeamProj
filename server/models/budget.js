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
    users: [
      {
        type: Schema.Types.ObjectId,
        ref: 'User'
      }
      // TO DO: default: [user from current session]
    ],
  },
  // set this to use virtual below
  // {
  //   toJSON: {
  //     virtuals: true,
  //   },
  // }
);

const Budget = model('Budget', budgetSchema);

module.exports = Budget;





// OLDER ATTEMPT AT userId:

// userId: {
// type: Schema.Types.ObjectId,
// required: true,
// ref: {
//   model: 'User',
//   key: 'id'
// }
// TO DO: default: [user from current session]
// },