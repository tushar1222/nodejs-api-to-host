// routes/index.js
import express from "express";
var router = express.Router();

/* GET home page. */
router.get("/", function(req, res, next) {
  res.render("index", { title: "Express" });
});

router.get("/orders", function(req, res, next) {
  const orders = [
    { orderNo: 1, name: 'keema' },
    { orderNo: 2, name: 'paneer'},
    { orderNo: 3, name: 'chicken' }
  ];

  res.json(orders);
});
export default router;
