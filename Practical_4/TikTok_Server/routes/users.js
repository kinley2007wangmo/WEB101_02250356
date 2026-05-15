const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.json([
    {
      id: 1,
      username: "kinley",
    },
    {
      id: 2,
      username: "tiktokuser",
    },
  ]);
});

module.exports = router;