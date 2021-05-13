const express = require("express");
const router = express.Router();


router.get("/movies", (req, res, next) =>
  res.render("movies/movies.hbs")
); 

router.get("/movies/new",(req,res) =>{
    res.render("movies/new-movie.hbs")
})


module.exports = router;
