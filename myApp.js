let express = require('express');
let app = express();

const assetPath = __dirname + "/public";

app.use("/public", express.static(assetPath));

const filePath = __dirname + "/views/index.html";

app.use("/", function(req,res,next) {
  console.log(`${req.method} ${req.path} - ${req.ip}`)
  next();
})

app.get("/", function(req, res) {
  res.sendFile(filePath);
});

// app.get("/json", function(req, res) {
//   let message = {"message": "Hello json"}
//   if (process.env['MESSAGE_STYLE'] === 'uppercase') {
//     return res.json(message.message.toUpperCase())
//   } else {
//     return res.json(message.message)
//   }
// });

app.get("/json", (req, res) => {
  let message = "Hello json";
  (process.env.MESSAGE_STYLE == "uppercase") ?
    message=message.toUpperCase() : 
    message=message;
  res.json({"message": message});
});


module.exports = app;