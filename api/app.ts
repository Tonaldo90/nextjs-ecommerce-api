import app from ".";
const productsRouter = require("../routes/products");

app.use("/api", productsRouter);
app.listen(3000, () =>
  console.log("🚀 Server ready at: http://localhost:3000")
);
