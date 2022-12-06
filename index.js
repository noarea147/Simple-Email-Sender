const express = require("express");
const app = express();
const cors = require("cors");
// const config = require('./config/database');

require("dotenv").config();
// const config = require('./config/database');
const LOG = require("./logger");

const port = 4000;
app.use(express.json());
app.use(cors());
app.listen(port, () => {
  LOG.info(`Mailing Server started on port ${port} [production]`);
});

app.use("/", require("./src/routes/email.routes"));
