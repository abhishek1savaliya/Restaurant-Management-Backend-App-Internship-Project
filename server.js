const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const connectDb = require("./config/db");

const PORT = process.env.PORT || 5000;

const app = express();

connectDb();

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

const routes = require("./routes/route");
app.use(routes);

app.listen(PORT, () => {
  console.log(`SERVER IS RUNNING ON PORT ${PORT}`);
});