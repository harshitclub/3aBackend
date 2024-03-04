const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
    },
    organization: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
    },
    telephone: {
      type: String,
    },
    country: {
      type: String,
    },
    city: {
      type: String,
    },
    postalCode: {
      type: String,
    },
    address: {
      type: String,
      default: "",
    },
    courseTitle: {
      type: String,
      default: "",
    },
    courseCode: {
      type: String,
      default: "",
    },
    courseStartDate: {
      type: Date,
    },
    courseLocation: {
      type: String,
      default: "",
    },
    courseFee: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);

const Booking = mongoose.model("bookings", bookingSchema);

module.exports = Booking;
