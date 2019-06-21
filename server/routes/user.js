const router = require("express").Router();
const jwt = require("jsonwebtoken");
const config = require("../config");
const db = require("../models");

const tokenizer = user => {
  return jwt.sign(
    {
      sub: user.id
    },
    config.secret
  );
};

// ######## POST Routes ########

router.post("/signup", function(req, res) {
  const { email, password, name } = req.body;

  if (!email || !password) {
    return res.status(422).send({ error: "You must provide an email and password" });
  }

  db.User.findOne({ email })
    .then(dbuser => {
      // if the user exists return an error
      if (dbuser) {
        return res.status(422).send({ error: "Email already in use" });
      }
      //create new user object
      const user = new db.User({ email, password, name });
      // save the user
      user.save().then(user => {
        // respond with the success if the user existed
        res.json({ token: tokenizer(user), user: { email: user.email } });
      });
    })
    .catch(err => {
      return next(err);
    });
});

module.exports = router;