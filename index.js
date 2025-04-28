const express = require("express");
require("./src/constants/firebaseinit.js");
const router = require("./src/router/routes");
const cors = require("cors");
const functions = require("firebase-functions");

const app = express();
require("dotenv").config();
app.use(cors());
app.use(express.json());

app.get("/", (_, res) => {
  res.send("hello there");
});

app.use("/api", router);

// app.listen(process.env.PORT, () => {
//   console.log(`Server is running at http://localhost:${process.env.PORT}`);
// });

exports.notification = functions.https.onRequest(
  {
    region: "asia-south1",
  },
  app
);