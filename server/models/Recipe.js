//no unique
var mongoose = require("mongoose")
var Schema = mongoose.Schema

var RecipeSchema = new Schema({
    title: {
        type: String,
        required: true,
        unique: {index:{unique: true}}
    },
    cautions: {
        type: Array,
        default: []
    },
    healthLabels: {
        type: Array,
        default: []
    },
    calories:{
        type: String,
        required: true
    },
    servings: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true
    },
    ingredients: {
        type: Array,
        default: []
    },
    imgLink: {
        type: String,
        required: true
    }, 
    createdAt: {
        type: Date,
        default: Date.now
    },
   
    user: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },

    notes: [{
        type: Schema.Types.ObjectId,
        ref: "Notes"
    }]
})


var Recipe = mongoose.model("Recipe", RecipeSchema)

module.exports = Recipe