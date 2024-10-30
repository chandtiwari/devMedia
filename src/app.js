const express = require("express");

const app = express();

app.get("/user", (req, res) => {
  res.send({ firstName: "Chandan", lastName: "Tiwari" });
});

app.post("/user", (req, res) => {
  res.send("Data Saved..!!");
});

app.delete("/user", (req, res) => {
  res.send("Deleted");
});

app.use("/test", (req, res) => {
  res.send("Test from server....");
});
app.listen(3000, () => {
  console.log("started server......!!!");
});
