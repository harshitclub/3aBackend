const Enquiry = require("../models/enquirySchema");

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
    } = await req.body;

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
    return res.json({
      messag: "Enquiry Submitted!",
      success: true,
      savedEnquiry,
    });
  } catch (error) {
    return res.json({ error: error.message }, { status: 500 });
  }
};

module.exports = { enquiryForm };
