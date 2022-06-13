let express = require('express');
let app = express();

const assetPath = __dirname + "/public";

app.use("/public", express.static(assetPath));

const filePath = __dirname + "/views/index.html";

app.get("/", function(req, res) {
  res.sendFile(filePath);
});

const message = {"message":"Hello json"};
app.get("/json", function(req, res) {
  res.json(message);
});

module.exports = app;
