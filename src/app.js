const express = require("express");

const app = express();

app.use("/hello", (req, res) => {
  res.send("Hello from server....");
});
app.use("/test", (req, res) => {
  res.send("Test from server....");
});
app.listen(3000, () => {
  console.log("started server......!!!");
});
