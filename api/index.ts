import express from "express";
var cors = require("cors");
const app = express();
app.use(cors());
// enable JSON body parser
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

export default app;
