const express = require("express");
const { connect } = require("./db/dbConfig");
require("dotenv").config();
const helmet = require("helmet");
const cors = require("cors");
const rateLimit = require("express-rate-limit");
const morgan = require("morgan");
const { formRouter } = require("./routes/formRoutes");
const app = express();
const PORT = process.env.PORT || 8080;

// Security middleware setup
app.use(helmet()); // Protect against common vulnerabilities
app.use(
  rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // Limit requests to 100 per window
  })
); // Limit excessive requests

// Middleware setup
app.use(express.json({ limit: "16kb" })); // Parse JSON data with limit
app.use(express.urlencoded({ extended: true, limit: "16kb" })); // Parse URL-encoded data with limit
app.use(
  cors({
    origin: process.env.ALLOWED_ORIGINS, // Restrict CORS origins
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
); // Enable CORS with restrictions
app.use(morgan("dev")); // Log requests for debugging (remove in production)

app.use("/api/v1", formRouter);

app.listen(PORT, async () => {
  try {
    await connect(); // Ensure database connection
    console.log(`Server running at port: ${PORT}`);
  } catch (error) {
    console.error("Database connection error:", error);
    process.exit(1); // Exit with error if connection fails
  }
});
