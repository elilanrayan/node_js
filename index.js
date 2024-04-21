const express = require("express");
const routes = require("./routes/start");
const app = express();
const port = 3000;

app.use(express.json());
app.use("/", routes);

app.use(express.static("../front"))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

