const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.json([
    {
      id: 1,
      caption: "My first TikTok clone 🔥",
      videoUrl: "/videos/sample.mp4",
    },
  ]);
});

module.exports = router;