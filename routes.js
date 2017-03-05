module.exports = function (app, io) {
    app.get("/", function (req, res) {
        // res.json({ "data": "Hello socket" });
        res.render("home");
    })

    io.on("connection", function (socket) {

        socket.on("send", function (data) {
            console.log(data);

            socket.emit("reply", { "received": data });
        })
        socket.on("load", function (data) {
            console.log(data);
        })
    })
}