const express = require("express");
const { connect } = require("./db/dbConfig");
require("dotenv").config();
const cors = require("cors");
const { formRouter } = require("./routes/formRoutes");
const app = express();
const PORT = process.env.PORT || 8080;

// Middleware setup
// - Parses JSON data
app.use(express.json());

// - Parses URL-encoded data with specific limit
app.use(express.urlencoded({ extended: true, limit: "16kb" }));

// - Enables cross-origin resource sharing
app.use(cors());

app.use("/api/v1", formRouter);

app.listen(PORT, () => {
  connect();
  console.log(`Server running at port: ${PORT}`);
});
