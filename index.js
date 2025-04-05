const express = require("express");
require("./src/constants/firebaseinit.js");
const router = require("./src/router/routes");
const { sendNotification } = require("./src/controller/controllers.js");
const app = express();
require("dotenv").config();
const PORT = 8000;

app.use(express.json());



app.get("/", (_, res) => {
  res.send("hello there");
});

app.use("/api", router);

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
