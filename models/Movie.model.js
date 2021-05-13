
const mongoose = require("mongoose"); 
const Schema = mongoose.Schema;

const movieSchema = new Schema(
  {
    // model properties
    title: String,
    genre: String,
    plot: String,
    cast: [{type : Schema.types.ObjectId, ref : "Celebrity"}],
  },
  {
    timestamps: true,
  }
);

module.exports = model("Movie", celebritySchema);