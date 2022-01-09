const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

const bodyParser = require("body-parser");
const cors = require("cors");
const path = require('path');

require("./model/db");

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


// "proxy": "http://localhost:8080"
// "dev": "concurrently \"npm run server\" \"npm start --prefix client\""
//"proxy": "http://localhost:5000"

app.use("/api",require("./router/Post"));


// Serve static assets if in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}


app.listen(port, (req, res) => {
  console.log("Server connected");
});
