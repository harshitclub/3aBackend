const mongoose = require("mongoose");

const enquireySchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
      trim: true, // Remove leading/trailing whitespace
    },
    email: {
      type: String,
      required: true,
      trim: true, // Remove leading/trailing whitespace
      lowercase: true, // Convert to lowercase for case-insensitive matching
      validate: {
        validator: (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value),
        message: "Please enter a valid email address.",
      },
    },
    phone: {
      type: String,
      required: true,
      trim: true, // Remove leading/trailing whitespace
    },
    country: {
      type: String,
      required: true,
      trim: true, // Remove leading/trailing whitespace
    },
    city: {
      type: String,
      required: true,
      trim: true, // Remove leading/trailing whitespace
    },
    course: {
      type: String,
      default: "", // No need for empty string default
    },
    trainingFormat: {
      type: String,
      required: true,
      default: "",
    },
    message: {
      type: String,
      default: "", // No need for empty string default
    },
  },
  { timestamps: true }
);

// Mongoose middleware for pre-save input validation and sanitization
enquireySchema.pre("save", async function (next) {
  // Additional field-level validation and sanitization logic can be added here
  // if necessary.
  this.fullName = this.fullName.trim(); // Ensure trimmed full name
  this.phone = this.phone.trim(); // Ensure trimmed phone number
  this.country = this.country.trim(); // Ensure trimmed country
  this.city = this.city.trim(); // Ensure trimmed city
  next();
});

const Enquiry = mongoose.model("enquiries", enquireySchema);

module.exports = Enquiry;
