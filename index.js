const app = require("express")();
const morgan = require("morgan");

app.use(morgan(":remote-addr - :remote-user [:date[clf]] :method :url HTTP/:http-version :status"));

app.get("/", (req, res) => {
    res.send("Hello Big Government Agency");
});

app.listen(4000, () => {
    console.log("Listening on port 4000");
});