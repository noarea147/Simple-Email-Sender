/* eslint func-names: "off" */
const mongoose = require("mongoose");
const LOG = require("../logger");

require("dotenv").config();

module.exports = function () {
  const url = process.env.MONGODB_URL;
  mongoose.connect(url, { useUnifiedTopology: true });
  mongoose.connection
    .once("open", () => {
      LOG.info(
        `Connected to MongoDB [AUTH ENVIRONMENT]: ${process.env.NODE_ENV}`
      );
    })
    .on("error", (error) => {
      LOG.info("Connection error:", error);
    });
};
