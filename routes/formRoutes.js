const express = require("express");
const {
  enquiryForm,
  bookingForm,
  contactForm,
} = require("../controllers/formControllers");

const formRouter = express.Router();

formRouter.post("/enquiry", enquiryForm);
formRouter.post("/booking", bookingForm);
formRouter.post("/contact", contactForm);
// formRouter.post("/join");

module.exports = { formRouter };
