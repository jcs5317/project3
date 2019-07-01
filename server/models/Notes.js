var mongoose = require("mongoose")
var Schema = mongoose.Schema


var NotesSchema = new Schema({

    body: {
        type: String,
        ref: "Notes"
    },

    createdAt: {
        type: Date,
        default: Date.now
    },

    user: {
        type: Schema.Types.ObjectId,
        ref: "User"
    }
})

var Notes = mongoose.model("Notes", NotesSchema)

module.exports = Notes