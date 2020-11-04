/* const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT || 8080;
//Express
app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, "build")));
app.get("/ping", function (req, res) {
  return res.send("pong");
});
app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});
app.listen(port);
 */
var http = require("http");
const express = require("express");
const app = express();

const port = 21015;
app.listen(port);
const baseDir = `${__dirname}/build/`;
app.use(express.static(`${baseDir}`));
app.get("/", (req, res) => res.sendfile("index.html", { root: baseDir }));
