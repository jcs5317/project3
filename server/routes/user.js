const router = require("express").Router();
const jwt = require("jsonwebtoken");
const config = require("../config");
const db = require("../models");
const passport = require("passport");
const passportLocalStrategy = passport.authenticate("local", {
  session: false
});

const tokenizer = user => {
  return jwt.sign(
    {
      sub: user.id
    },
    config.secret
  );
};

// ######## POST Routes ########
// /user/signup
// router.post("/user/signup", function(req, res){
//   res.json({ token: tokenizer(req.user) });
// })

router.post("/signup", function(req, res) {
  const { email, password, username: name } = req.body;

  console.log(req.body)

  if (!email || !password) {
    return res
      .status(422)
      .send({ error: "You must provide an email and password" });
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

router.post("/login", passportLocalStrategy, function(req, res) {
  res.json({ token: tokenizer(req.user) });
});

module.exports = router;
