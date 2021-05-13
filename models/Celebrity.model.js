const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const celebritySchema = new Schema(
  {
    // model properties
    name: String,
    occupation: {
      type: String,
      enum: ["actor", "singer", "comedian", "athlete", "unknown"],
    },
    catchPhrase: String,
  },
  {
    timestamps: true,
  }
);

module.exports = model("Celebrity", celebritySchema);
