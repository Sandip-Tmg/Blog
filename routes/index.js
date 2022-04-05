const express = require("express");
const router = express.Router();
const Article = require("../models/article");

router.get("/", async (req, res) => {
  const articles = await Article.find().sort({
    date: "desc",
  });
  // this the route for rendering the homepage of our application
  res.render("articles/index", { articles: articles });
});

module.exports = router;