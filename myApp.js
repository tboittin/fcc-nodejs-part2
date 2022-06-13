let express = require('express');
let app = express();

const assetPath = __dirname + "/public";

app.use("/public", express.static(assetPath));

const filePath = __dirname + "/views/index.html";

app.get("/", function(req, res) {
  res.sendFile(filePath);
});

const message = {"message":"Hello json"}
const mySecret = process.env['MESSAGE_STYLE']

app.get("/json", function(req, res) {
  if (mySecret === 'uppercase') {
    return res.json(message.message.toUpperCase());
  }
  return res.json(message);
});


module.exports = app;
