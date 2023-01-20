const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/contact", (req, res) => {
  res.send("abc@gmail.com");
});

app.get(
  "/",
  (req, res, next) => {
    console.log("middleware");
    next();
  },
  (req, res) => {
    res.sendFile(__dirname + "/home.html");
  }
);
app.post("/", (req, res) => {
  var num1 = Number(req.body.num1);
  var num2 = Number(req.body.num2);
  var result = num1 + num2;
  console.log(result);
  res.send("" + result);
});
app.listen(3000, () => {
  console.log("Server started at port 3000");
});
