const { Schema, model } = require('mongoose');

const spendingSchema = new Schema(
    {
      amount: {
        type: Number,
        required: true,
      },
      timeSubmitted: {
        // type: Date,
        // default: Date.now,
        type: String,
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
      // [
      type: String,
      required: true,
      // {
      //   type: Schema.Types.ObjectId,
      //   ref: 'User'
      // }
      // TO DO: default: [user from current session]
      // ],
    },
    },
    // set this to use virtual below
    // {
    //   toJSON: {
    //     virtuals: true,
    //   },
    // }
  );

const Spending = model('Spending', spendingSchema);

module.exports = Spending;



// OLD ATTEMPT
// userId: {
//   // this should hopefully run by ids for users in User schema
//   type: Schema.Types.ObjectId,
//     required: true,
//       ref: {
//     model: 'User',
//       key: 'id'
//   }
//   // TO DO: default: [user from current session]
// },