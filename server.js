const express = require("express");
const server = express();
const port = 21011;
// the __dirname is the current directory from where the script is running
server.use(express.static(__dirname));
server.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});
server.use(express.static(__dirname + "/views"));
server.use(express.static(__dirname + "/public/"));
server.listen(port);
