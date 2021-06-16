const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProfileSchema = new Schema({
      user: {
          type: Schema.Types.ObjectId,
          ref: "myPerson"
      },
      username: {
          type: String,
          required: true,
          max: 50
      },
      website: {
          type: String,

      },
      country: {
          type: String
      },
      languages: {
          type: [String],
          required: true
      },
      portfolio: {
          type: String
      },
      workrole: [
          {
              role: {
                  type: String,
                  required: true
              },
              comapny: {
                  type: String
              },
              country: {
                  type: String
              },
              from: {
                  type: Date,
              },
              to: {
                  type: Date
              },
              current: {
                  type: Boolean,
                  default: false
              },
              details: {
                  type: String
              }
          }
      ],
      social: {
          youtube: {
              type: String
          },
          facebook: {
              type: String
          },
          instagram: {
              type: String
          }
      },
      date: {
          type: String,
          default: Date.now 
      }
}); 

module.exports = profile = mongoose.model("myprofile", ProfileSchema);