const express = require("express");

const cors = require("cors");
const { sequelize } = require("./database/models");
const router = require("./routes");

const app = express();
app.use(cors());

app.use("/api", router);

app.listen(8080, () => console.log(`Server running on http://127.0.0.1:8080`));