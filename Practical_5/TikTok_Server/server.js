const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const usersRoute = require("./routes/users");
const videosRoute = require("./routes/videos");

app.use("/api/users", usersRoute);
app.use("/api/videos", videosRoute);

app.listen(8000, () => {
  console.log("Server running on port 8000");
});