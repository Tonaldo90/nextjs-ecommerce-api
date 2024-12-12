const express = require("express");
const router = express.Router();
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
// GET /users
router.get("/products", async (req, res) => {
  try {
    /**
     * Retrieves a list of products from the database.
     *
     * @returns {Promise<Array>} A promise that resolves to an array of product objects.
     */
    const products = await prisma.products.findMany();
    res.json(products);
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ error: "An error occurred while fetching products" });
  }
});

module.exports = router;
