const express = require("express");
const app = express();
const port = process.env.PORT || 8080;

const bodyParser = require("body-parser");
const cors = require("cors");
const path = require('path');

require("./model/db");

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.listen(port, (req, res) => {
  console.log("Server connected");
});
