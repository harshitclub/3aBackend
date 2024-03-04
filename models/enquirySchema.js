const mongoose = require("mongoose");
const enquirySchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    course: {
      type: String,
      default: "",
    },
    trainingFormat: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      default: "",
    },
  },
  { timestamps: true }
);

const Enquiry = mongoose.model("enquiries", enquirySchema);

module.exports = Enquiry;
