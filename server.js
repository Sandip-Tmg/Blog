const express = require("express");
const mongoose = require("mongoose");
const app = express();
const articleRouter = require("./routes/article");
const homeRouter = require("./routes/index");
// connecting to database
mongoose.connect(
  "mongodb://localhost/Blog",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => {
    console.log("Database connected");
  }
);

// setting up the engine to ejs template
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: false }));

app.use(express.static('public'));

// home route of our app 
app.use("/" , homeRouter);

// it uses a routes articles.js file for our article route
app.use("/articles", articleRouter);

app.listen(3000, () => {
  console.log("Server running on 3000 port");
});
