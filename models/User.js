const mongoose = require("mongoose");


// Schema("template", optional configuration obj)
const userSchema = new mongoose.Schema({
    name: {type: String, required: true},
    username : {type: String, required: true},
    email : {type: String, required: true},
    age : {type: String, required: true},
    height : {type: String, required: true},
    weight : {type: String, required: true},
    radar : {type: String, required: true},
})

const User = mongoose.model("User", userSchema);

module.exports = User;


