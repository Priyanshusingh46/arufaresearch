const { PolarApp, Route } = require("polar-framework");

const app = new PolarApp();

app.use(Route.get("/", (req, res) => {
    res.send("Hello, World!");
}));

app.listen(3000, () => {
    console.log("Listening on port 3000");
});
