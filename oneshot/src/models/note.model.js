const {Schema, model} = require("mongoose");

const noteSchema = new Schema({
    title: String,
    description: String
})

const Note = model("notes", noteSchema);

module.exports = Note