const express = require("express");
const router = express.Router();
const Article = require("../models/article");

router.get("/new", (req, res) => {
  // this the route for rendering the homepage of our application
  return res.render("articles/new", { article: new Article() });
});

router.get("/:id", async (req, res) => {
  const article = await Article.findById(req.params.id);
  if (article == null) res.redirect("/");
  res.render("articles/show", { article: article });
});

router.get("/delete/:id", (req, res) => {
  Article.deleteOne({ _id: req.params.id })
    .then(() => {
      console.log("Blog deleted");
      res.redirect("/");
    })
    .catch((err) => {
      console.log(err);
    });
});

router.get("/edit/:id", async (req, res) => {
  const article = await Article.findById(req.params.id);
  res.render("articles/edit", { article: article });
});

router.post("/edit/:id", async(req, res) => {
  let article ={
    title: req.body.title,
    description: req.body.description,
  };

  let query = { _id: req.params.id };

  Article.update(query, article)
    .then(() => {
      console.log("successfully! updated the blog!");
      res.redirect("/");
    })
    .catch((err) => console.log(err));
});

router.post("/", async (req, res) => {
  let article = new Article({
    title: req.body.title,
    description: req.body.description,
  });

  article
    .save()
    .then(() => {
      console.log("Blog saved successfull");
      res.redirect("/");
    })
    .catch((err) => console.log(err));
});

module.exports = router;
