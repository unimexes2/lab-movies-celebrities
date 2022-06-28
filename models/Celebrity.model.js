//  Add your code here
const mongoose = require("mongoose");
const celebSchema = new mongoose.Schema({
   
   
    title: {
        type: String
    },
    occupation : {
        type: String

    },
    catchPhrase: {
        type: String
      }
});

const Celeb = mongoose.model("Celeb", celebSchema);

module.exports = Celeb;
