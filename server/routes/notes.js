const router = require("express").Router();
const db = require("../models");
const passport = require("passport");
const passportJWTStrategy = passport.authenticate("jwt", { session: false });

router.post("/notes", passportJWTStrategy, function(req, res) {
  console.log("create notes:", req.body);
  const notes = { ...req.body, user: req.user.id };
 
  db.Notes.create(notes)
    .then(function(notes) {
     
      res.json(notes);
    })
    .catch(function(err) {
     
      res.status(400).json({ error:"You must be logged in to search for recipes" });
    });
  // create new save recipe
  // if user is logged in
  // get user ID
  // just like to article in scraper
  // look at scraper for example
  // create reciepe with logged in user id

  // res.json(true);
  // if error or something happens item not created send res.json(false)
});

router.get("notes/:id", function(req,res) {
    // Find the note by req.params.id,
    db.Notes.findOne(
        {_id: req.params.id}
    )
    // run the populate method with note,
    .populate("notes")
    // respond with the article with the note included.
    .then(function(dbNotes) {
        // If all Articles are successfully found, send them back to the client.
        res.json(dbNotes);
    })
    .catch(function(error) {
        // If an error occurs, send the error to the client.
        res.json(error);
    });
});

router.post("/postnotes/:id", function(req, res) {
    // Save the new note that gets posted to the Notes collection,
    // then find an article from the req.params.id,
    // and update it's "note" property with the _id of the new note.
    console.log(req.body);
    console.log("xxxxxxx");
    db.Notes.create(req.body)
    .then(function(dbNotes) {
        return db.Notes.findOneAndUpdate(
            {_id: req.params.id},
            {$push:
                {notes: dbNotes._id}
            },
            // {note: dbNote._id},
            {new: true }
        );
    })
    // respond with the article with the note included.
    .then(function(dbNotes) {
        // If all Notes are successfully found, send them back to the client.
        res.json(dbNotes);
    })
    .catch(function(error) {
        // If an error occurs, send the error to the client.
        res.json(error);
    });
});

router.get("/getsinglenote/:id", function(req,res) {
    db.Notes.findOne(
        {_id: req.params.id}
    )
    .then(function(result) {
        res.json(result);
    })
    .catch(function(error) {
        res.json(error);
    });
});

router.delete("/deletenote/:id", function(req,res) {
    db.Notes.remove(
        {_id: req.params.id}
    )
   
    .then(function(dbNotes) {
        res.json(dbNotes);
    })
    .catch(function(error) {
        res.json(error);
    });
});

module.exports = router;