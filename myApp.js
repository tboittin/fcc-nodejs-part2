let express = require('express');
let app = express();

const assetPath = __dirname + "/public"

app.use("/public", express.static(assetPath))

const filePath = __dirname + "/views/index.html"

app.get("/", function(req, res) {
  res.sendFile(filePath)
})

module.exports = app;
