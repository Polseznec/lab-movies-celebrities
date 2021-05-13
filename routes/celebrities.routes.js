const express = require("express");
const router = express.Router();
const CelebritiesModel = require("./../routes/celebrities.routes.js");

/* GET celebrities page */
router.get("/celebrities", (req, res, next) =>
  res.render("celebrities/celebrities.hbs")
);

router.get("/celebrities/new", (req, res) => {
  res.render("celebrities/new-celebrity.hbs");
});

router.post("/celebrities/create", (req, res, next) => {
  CelebritiesModel.create(req.body)
    .then((dbResult) => {
      res.redirect("/celebrities");
    })
    .catch((dbError) => next(dbError));
});




module.exports = router;



