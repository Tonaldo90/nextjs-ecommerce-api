const express = require("express");
var cors = require("cors");
const app = express();
app.use(cors());
// enable JSON body parser
app.use(express.json());
const productsRouter = require("../routes/products");

app.use("/api", productsRouter);

if (!process.env.DATABASE_URL) {
  throw "Can not proceed without database url, please provide value as environment variable";
}

app.get("/", (req, res) => {
  res.send("This is not the API you're looking for");
});

app.listen(3000, () => console.log("🚀 Server ready on port 3000"));
