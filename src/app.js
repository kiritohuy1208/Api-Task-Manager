const express = require("express");
const app = express();
const api = require("./routes/index");

const dotenv = require("dotenv");
dotenv.config();
const port = 4000;
const ConnectDatabase = require("./../config/database");

app.use(express.json());
app.use("/api", api);
ConnectDatabase();
app.listen(port, () => {
  console.log(`Server start on port: ` + port);
});
