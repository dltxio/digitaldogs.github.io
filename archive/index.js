const express = require("express");
const path = require("path");
const app = express();
const apiRouter = require("./routes/api");
const PORT = process.env.PORT || 3001;
const buildPath = path.join(__dirname, "./client/build");

// Render the index.hbs homepage
app.set("view engine", "hbs");
app.use("/css", express.static(__dirname + "/css"));
app.use("/img", express.static(__dirname + "/img"));
app.use("/js", express.static(__dirname + "/js"));
app.use(express.static(__dirname + "/public"));
app.use("/vendor", express.static(__dirname + "/vendor"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/v1", apiRouter);
app.get("/demo", express.static(buildPath + "/index.html"));
app.get("/", (req, res) => {
  res.render("index.hbs", { title: "Digital Dogs " });
});
// app.get("/demo", (req, res) => {
//   res.sendFile(buildPath );
// });

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
