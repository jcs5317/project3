var mongoose = require("mongoose")
var Schema = mongoose.Schema
var bcrypt = require("bcryptjs")

var UserSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: {index:{unique: true}}
    },
    name: {
        type: String,
        required: true
    },
    allergy: {
        type: Array,
        default: []
    },
    password: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    savedRecipe: [{
        type: Schema.Types.ObjectId,
        ref: "Recipe"
    }], 
    savedNotes: [{
        type: Schema.Types.ObjectId,
        ref: "Notes"
    }]
   
})

UserSchema.pre('save', function(next) {
    var user = this;

    // only hash the password if it has been modified (or is new)
    if (!user.isModified('password')) return next();

    // generate a salt
    bcrypt.genSalt(10, function(err, salt) {
        if (err) return next(err);

        // hash the password using our new salt
        bcrypt.hash(user.password, salt, function(err, hash) {
            if (err) return next(err);

            // override the cleartext password with the hashed one
            user.password = hash;
            next();
        });
    });
});

UserSchema.methods.comparePassword = function(candidatePassword, cb) {
    bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
        if (err) return cb(err);
        cb(null, isMatch);
    });
};

var User = mongoose.model("User", UserSchema)

module.exports = User