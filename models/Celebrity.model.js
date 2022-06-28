//  Add your code here
const mongoose = require("mongoose");

const celebSchema = new mongoose.Schema({
    name: {
        type: String
    },
    occupation : {
        type: String

    },
    catchPhrase: {
        type: String
      }
});

const Celeb = mongoose.model("Celebrity", celebSchema);

module.exports = Celeb;
