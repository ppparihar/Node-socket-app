
const express = require("express");
const app = express();

const port = process.env.PORT || 8080;
const io = require('socket.io').listen(app.listen(port));

// app.get("/", function (req, res) {
//     res.json({ "data": "Hello Duniya" });
// })
require("./config")(app, io);
const routes = require("./routes")(app, io);
console.log("application is running at http://localhost:" + port);