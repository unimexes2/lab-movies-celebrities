const router = require("express").Router();
const Celeb = require("../models/Celebrity.model");
const Movie = require("../models/Movie-model");




router.get('/movies/create', (req, res, next) => {
    Celeb.find()
    .then((response) => {
        //debugger
     console.log(response,"response");
      res.render("./movies/new-movie.hbs",{ response });
    })
    .catch((err) => {
      next(err);
    });
    
    })
   
    router.post('/movies/create', (req, res, next) => {
      debugger
     Movie.create(req.body)
      
     .then((response) => {
        Movie.find()
        .populate("cast","title")
        .then((response) => {debugger
          console.log(response,"response");
          res.render("./movies/movies",{ response });
        })
        .catch((err) => {
            debugger
          next(err);
        });
      })
      .catch((err) => {res.render("./celebrities/new-celebrity", { response });
       
      });
    })


    router.get('/movies', (req, res, next) => {
        Movie.find()
        .populate("cast","title")
        .then((response) => {debugger
          console.log(response,"response");
          res.render("./movies/movies",{ response });
        })
        .catch((err) => {
            debugger
          next(err);
        });
    
        })
       



module.exports = router;