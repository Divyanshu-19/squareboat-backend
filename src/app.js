const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");

const routes = require("./routes/v1");

const app = express();
dotenv.config();

app.use(express.json());

app.use(cors());

mongoose.connect(process.env.MONGO_URL).then(() => {
  console.log("Connected to mongo");
});

app.use("/api/v1/", routes);

const PORT = process.env.PORT || 8001;

app.listen(PORT, () => {
  console.log(`listening to port ${PORT}`);
});
