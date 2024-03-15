const Booking = require("../models/bookingSchema");
const Contact = require("../models/contactSchema");
const Enquiry = require("../models/enquirySchema");
const {
  sendDetails,
  sendEnquiry,
  sendContact,
} = require("../utils/sendDetails");

const enquiryForm = async (req, res) => {
  try {
    const {
      fullName,
      email,
      phone,
      country,
      city,
      course,
      trainingFormat,
      message,
    } = req.body;

    const newEnquiry = new Enquiry({
      fullName,
      email,
      phone,
      country,
      city,
      course,
      trainingFormat,
      message,
    });

    const savedEnquiry = await newEnquiry.save();
    await sendEnquiry({
      fullName,
      email,
      phone,
      country,
      city,
      course,
      trainingFormat,
      message,
    });
    return res.json({
      message: "Thank you for your enquiry | Check your email",
      success: true,
      savedEnquiry,
    });
  } catch (error) {
    console.error("Error occurred in Enquiry Form:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

const bookingForm = async (req, res) => {
  try {
    const {
      fullName,
      companyName,
      email,
      phone,
      telephone,
      country,
      city,
      postalCode,
      postalAddress,
      courseName,
      courseCode,
      courseFee,
      courseStartDate,
      trainingMode,
      paymentMethod,
    } = req.body;

    const newBooking = new Booking({
      fullName,
      companyName,
      email,
      phone,
      telephone,
      country,
      city,
      postalCode,
      postalAddress,
      courseName,
      courseCode,
      courseFee,
      courseStartDate,
      trainingMode,
      paymentMethod,
    });

    const savedBooking = await newBooking.save();
    await sendDetails({
      fullName,
      companyName,
      email,
      phone,
      telephone,
      country,
      city,
      postalCode,
      postalAddress,
      courseName,
      courseCode,
      courseFee,
      courseStartDate,
      trainingMode,
      paymentMethod,
    });
    return res.json({
      message: "Thank you for your booking | Check your email",
      success: true,
      savedBooking,
    });
  } catch (error) {
    console.error("Error occurred in Booking Form:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

const contactForm = async (req, res) => {
  try {
    const {
      name,
      email,
      phone,
      company,
      jobPosition,
      enquiryReason,
      country,
      state,
      city,
      zip,
      message,
    } = req.body;

    const newContact = new Contact({
      name,
      email,
      phone,
      company,
      jobPosition,
      enquiryReason,
      country,
      state,
      city,
      zip,
      message,
    });

    const savedContact = await newContact.save();
    await sendContact({
      name,
      email,
      phone,
      company,
      jobPosition,
      enquiryReason,
      country,
      state,
      city,
      zip,
      message,
    });
    return res.json({
      message: "Message Received, we will contact you.",
      success: true,
      savedContact,
    });
  } catch (error) {
    console.error("Error occurred in Contact Form:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = { enquiryForm, bookingForm, contactForm };
