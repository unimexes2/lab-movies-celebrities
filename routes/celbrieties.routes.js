const router = require("express").Router();

const Celeb = require("../models/Celebrity.model");

router.get('/celebrities/new-celebrity ', (req, res, next) => {
   
  res.render("./celebrities/new-celebrity.hbs");
  })
 
  router.post('/celebrities/new-celebrity ', (req, res, next) => {
    debugger
   Celeb.create(req.body)
    .then((response) => {
      console.log(response,"response");
   res.render("./celebrities/celebrities", { response });
    })
    .catch((err) => {res.render("./celebrities/new-celebrity", { response });
     
    });
  })
  
  
  router.get('/celebrities/', (req, res, next) => {
    Celeb.find()
    .then((response) => {
      console.log(response,"response");
      res.render("./celebrities/celebrities.hbs",{ response });
    })
    .catch((err) => {
      next(err);
    });

    })
   












module.exports = router;
