const express = require("express");
const router = new express.Router();

router.get("/:id", (req, res) => {
  res.send("Get individual dog details");
});
router.get("/:id/pedigree", (req, res) => {
  res.send("Get dog pedigree");
});

router.post("/", (req, res) => {
  res.status(200).send(JSON.stringify({ tokenID: "abcd1234" }));
});
router.put("/:id", (req, res) => {
  res.send("Transfer dog");
});

module.exports = router;
