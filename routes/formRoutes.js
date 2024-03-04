const express = require("express");
const { enquiryForm } = require("../controllers/formControllers");

const formRouter = express.Router();

formRouter.post("/enquiry", enquiryForm);
formRouter.post("/booking");
formRouter.post("/join");
formRouter.post("/contact");

module.exports = { formRouter };
