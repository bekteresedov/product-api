const express = require("express");
const router = express.Router();
const Product = require("../models/Product");

router.get("/", (req, res) => {
  Product.find()
    .then((product) => {
      res.json(product);
    })
    .catch((error) => {
      res.json(error);
    });
});

router.get("/:id", (req, res) => {
  Product.findById(req.params.id)
    .then((product) => {
      res.json(product);
    })
    .catch((error) => {
      res.json(error);
    });
});

router.post("/", (req, res) => {
  const product = new Product({
    name: req.body.name,
    price: req.body.price,
    description: req.body.description,
  });
  product.save();
  res.json(product);
});

router.put("/:id", (req, res) => {
  Product.findByIdAndUpdate(req.params.id, {
    name: req.body.name,
    price: req.body.price,
    description: req.body.description
  })
    .then((product) => {
      res.json(product);
    })
    .catch((error) => {
      res.json(error);
    });
});

router.delete("/:id", (req, res) => {
  Product.findByIdAndDelete(req.params.id)
    .then((product) => {
      res.json(product);
    })
    .catch((error) => {
      res.json(error);
    });
});

module.exports = router;
