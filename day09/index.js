const express = require("express");
//express give you a path feature
const path = require('path');
const app = express();

      //__dirname give ypu a better way for write a path
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");


app.use("/", (req, res) => {
  //send a file on given path
  res.sendFile(path.join(__dirname,"public/downlod.jpeg"))
  res.render("filename", { title: "variable" });
})

app.listen(3000);
