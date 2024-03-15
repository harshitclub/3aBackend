const nodemailer = require("nodemailer");
const { convert } = require("html-to-text");

//   fullName,
//   companyName,
//   email,
//   phone,
//   telephone,
//   country,
//   city,
//   postalCode,
//   postalAddress,
//   courseName,
//   courseCode,
//   courseFee,
//   courseStartDate,
//   trainingMode,
//   paymentMethod,
// }) => {
//   try {
//     var transport = nodemailer.createTransport({
//       name: "mail.campussutras.com",
//       host: "mail.campussutras.com",
//       port: 465,
//       secure: true,
//       auth: {
//         user: process.env.MAIL_USER,
//         pass: process.env.MAIL_PASSWORD,
//       },
//     });

//     const mailOptions = {
//       from: `"3a Learning Solutions" <noreply@campussutras.com>`,
//       to: "gautamharshit41@gmail.com",
//       subject: `Booking Form - 3a Learning Solutions`,
//       html: `
//         <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
//       <html xmlns="http://www.w3.org/1999/xhtml">

//       <head>
//         <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
//         <meta name="viewport" content="width=device-width, initial-scale=1.0">
//         <title>Booking Form</title>
//         <!--[if mso]><style type="text/css">body, table, td, a { font-family: Arial, Helvetica, sans-serif !important; }</style><![endif]-->
//       </head>

//       <body style="font-family: Helvetica, Arial, sans-serif; margin: 0px; padding: 0px; background-color: #ffffff;">
//         <h1>Booking Form</h1>
//         <p><b>Name - </b>${fullName}</p>
//         <p><b>Company - </b>${companyName}</p>
//         <p><b>Email - </b>${email}</p>
//         <p><b>Phone - </b>${phone}</p>
//         <p><b>Telephone - </b>${telephone}</p>
//         <p><b>Country - </b>${country}</p>
//         <p><b>City - </b>${city}</p>
//         <p><b>Postal Code - </b>${postalCode}</p>
//         <p><b>Postal Address - </b>${postalAddress}</p>
//         <p><b>Course Name - </b>${courseName}</p>
//         <p><b>Course Code - </b>${courseCode}</p>
//        <p><b>Course Fee - </b>$${courseFee}</p>
//         <p><b>Course Start Date - </b>${courseStartDate}</p>
//         <p><b>Training Mode - </b>${trainingMode}</p>
//         <p><b>Payment Method - </b>${paymentMethod}</p>
//       </body>

//       </html>
//         `,
//     };
//     const mailResponse = await transport.sendMail(mailOptions);
//     console.log(mailResponse);
//     return mailResponse;
//   } catch (error) {
//     throw new Error(error);
//   }
// };
const sendDetails = async ({
  fullName,
  companyName = "", // Set default for optional companyName
  email,
  phone = "", // Set default for optional phone
  telephone = "", // Set default for optional telephone
  country,
  city,
  postalCode = "", // Set default for optional postalCode
  postalAddress = "", // Set default for optional postalAddress
  courseName,
  courseCode,
  courseFee,
  courseStartDate,
  trainingMode,
  paymentMethod,
}) => {
  try {
    // Load environment variables securely using dotenv (recommended)
    const transporter = nodemailer.createTransport({
      name: process.env.MAIL_HOST,
      host: process.env.MAIL_HOST,
      port: process.env.MAIL_PORT,
      secure: true,
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASSWORD,
      },
    });

    // Improved HTML template with placeholders and conditional logic
    const html = `
    <!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>3a Learning Solutions - Booking Confirmation</title>
  <style>
    /* Basic styles */
    body {
      font-family: Arial, sans-serif;
      margin: 0;
      padding: 0;
      background-color: #fff;
    }
    h1, p {
      margin: 0;
      padding: 0;
    }
    ul {
      list-style: none;
      padding: 0;
    }
    li {
      margin-bottom: 10px;
    }
    /* Header and main content containers */
    .header {
      background-color: #286682; /* Your primary brand color */
      color: #fff;
      padding: 20px;
      text-align: center;
    }
    .content {
      padding: 20px;
    }
    /* Payment confirmation section */
    .payment-confirmation {
      background-color: #72ac45; /* Your secondary brand color */
      color: #fff;
      padding: 10px;
      border-radius: 5px;
      margin-bottom: 15px;
    }
    /* Footer styling */
    .footer {
      background-color: #f2f2f2;
      padding: 10px;
      text-align: center;
    }
  </style>
</head>
<body>
  <div class="header">
    <h1>3a Learning Solutions - Booking Confirmation</h1>
  </div>
  <div class="content">
    <p>Thank you for your interest in 3a Learning Solutions!</p>
    <p>Here are the details you submitted:</p>
    <ul>
      <li><b>Name:</b> ${fullName}</li>
      <li><b>Company:</b> ${companyName || "N/A"}</li>
      <li><b>Email:</b> ${email}</li>
      <li><b>Phone:</b> ${phone || "N/A"}</li>
      <li><b>Telephone:</b> ${telephone || "N/A"}</li>
      <li><b>Country:</b> ${country}</li>
      <li><b>City:</b> ${city}</li>
      <li><b>Postal Code:</b> ${postalCode || "N/A"}</li>
      <li><b>Postal Address:</b> ${postalAddress || "N/A"}</li>
      <li><b>Course Name:</b> ${courseName}</li>
      <li><b>Course Code:</b> ${courseCode}</li>
      <li><b>Course Fee:</b> $${courseFee}</li>
      <li><b>Course Start Date:</b> ${courseStartDate}</li>
      <li><b>Training Mode:</b> ${trainingMode}</li>
      <li><b>Payment Method:</b> ${paymentMethod}</li>
    </ul>
    <p>**Payment confirmation:**</p>
    <p class="payment-confirmation">
      To confirm your booking, please proceed with a payment of $${courseFee} using your preferred method. Our team will be in touch shortly with further instructions.
    </p>
    <p>Once your payment is confirmed, your enrollment will be finalized.</p>
  </div>
  <div class="footer">
    <p>Sincerely,</p>
    <p>The 3a Learning Solutions Team</p>
  </div>
</body>
</html>
    `;

    const plainText = convert(html); // Optional plain text fallback

    const mailOptions = {
      from: `"3a Learning Solutions" ${process.env.MAIL_USER}`,
      to: `${email}, info@3alearningsolutions.com`,
      subject: `Booking Form - 3a Learning Solutions`,
      text: plainText,
      html,
    };

    const mailResponse = await transporter.sendMail(mailOptions);
    console.log("Mail sent successfully:", mailResponse.messageId);
    return mailResponse;
  } catch (error) {
    console.error("Error sending email:", error);
    throw error; // Re-throw to propagate the error
  }
};
const sendEnquiry = async ({
  fullName,
  email,
  phone,
  country,
  city,
  course,
  trainingFormat,
  message,
}) => {
  try {
    var transport = nodemailer.createTransport({
      name: process.env.MAIL_HOST,
      host: process.env.MAIL_HOST,
      port: process.env.MAIL_PORT,
      secure: true,
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASSWORD,
      },
    });

    const mailOptions = {
      from: `"3a Learning Solutions" ${process.env.MAIL_USER}`,
      to: `${email}, info@3alearningsolutions.com`,
      subject: `Enquiry Form - 3a Learning Solutions`,
      html: `<!DOCTYPE html>
      <html xmlns="http://www.w3.org/1999/xhtml">
      <head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Enquiry Form</title>
        <style>
          /* Basic styles */
          body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #fff;
          }
          h1, p {
            margin: 0;
            padding: 0;
          }
      
          /* Container styling */
          .container {
            padding: 20px;
            border-radius: 5px;
            margin: 20px auto; /* Center the container horizontally */
            max-width: 600px; /* Set a maximum width for responsive design */
          }
      
          /* Header styling */
          .header {
            background-color: #286682; /* Primary color */
            color: #fff;
            padding: 15px;
            text-align: center;
          }
      
          /* Content styling */
          .content {
            padding: 20px;
            border: 1px solid #ddd; /* Light border */
            border-top: none; /* Remove border on top for better separation */
          }
      
          /* List styling */
          ul {
            list-style: none;
            padding: 0;
          }
          li {
            margin-bottom: 10px;
          }
      
          /* Footer styling */
          .footer {
            background-color: #f2f2f2;
            padding: 10px;
            text-align: center;
          }
      
          /* Success message styling */
          .success-message {
            background-color: #72ac45; /* Secondary color */
            color: #fff;
            padding: 10px;
            border-radius: 5px;
            margin-bottom: 15px;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>Enquiry Form</h1>
          </div>
          <div class="content">
            <ul>
              <li><b>Name:</b> ${fullName}</li>
              <li><b>Email:</b> ${email}</li>
              <li><b>Phone:</b> ${phone || "N/A"}</li>
              <li><b>Country:</b> ${country}</li>
              <li><b>City:</b> ${city}</li>
              <li><b>Course:</b> ${course}</li>
              <li><b>Training Format:</b> ${trainingFormat}</li>
              ${message ? `<li><b>Message:</b> ${message}</li>` : ""}
            </ul>
            <p class="success-message">**Great news!** We've received your enquiry and our team will be in touch shortly to discuss your options and answer any questions you may have. We're excited to help you achieve your learning goals!</p>
          </div>
          <div class="footer">
            <p>Thank you for your enquiry!</p>
            <p>The 3a Learning Solutions Team</p>
          </div>
        </div>
      </body>
      </html>
       `,
    };
    const mailResponse = await transport.sendMail(mailOptions);
    console.log("Mail sent successfully:", mailResponse.messageId);
    return mailResponse;
  } catch (error) {
    console.error("Error sending email:", error);
    throw error; // Re-throw to propagate the error
  }
};

const sendContact = async ({
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
}) => {
  try {
    var transport = nodemailer.createTransport({
      name: process.env.MAIL_HOST,
      host: process.env.MAIL_HOST,
      port: process.env.MAIL_PORT,
      secure: true,
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASSWORD,
      },
    });

    const mailOptions = {
      from: `"3a Learning Solutions" ${process.env.MAIL_USER}`,
      to: `${email}, info@3alearningsolutions.com`,
      subject: `Contact Form - 3a Learning Solutions`,
      html: `<!DOCTYPE html>
      <html xmlns="http://www.w3.org/1999/xhtml">
      <head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Contact Form</title>
        <style>
          /* Basic styles */
          body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #fff;
          }
          h1, p {
            margin: 0;
            padding: 0;
          }
      
          /* Container styling */
          .container {
            padding: 20px;
            border-radius: 5px;
            margin: 20px auto; /* Center the container horizontally */
            max-width: 600px; /* Set a maximum width for responsive design */
            background-color: #f2f2f2;
          }
      
          /* Header styling */
          .header {
            background-color: #286682; /* Primary color */
            color: #fff;
            padding: 15px;
            text-align: center;
          }
      
          /* Info list styling */
          .info-list {
            list-style: none;
            padding: 0;
            margin: 15px 0; /* Add space before and after the list */
          }
          .info-list li {
            display: flex;
            justify-content: space-between; /* Align labels and values */
            margin-bottom: 10px;
          }
          .info-label {
            font-weight: bold;
            width: 150px; /* Set a fixed width for labels */
          }
      
          /* Message styling */
          .message {
            background-color: #72ac45; /* Secondary color */
            color: #fff;
            padding: 10px;
            border-radius: 5px;
            margin-bottom: 15px;
          }
      
          /* Footer styling */
          .footer {
            text-align: center;
            padding: 10px;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>Contact Form</h1>
          </div>
          <ul class="info-list">
            <li><span class="info-label">Name:</span> ${name}</li>
            <li><span class="info-label">Email:</span> ${email}</li>
            <li><span class="info-label">Phone:</span> ${phone || "N/A"}</li>
            <li><span class="info-label">Company:</span> ${
              company || "N/A"
            }</li>
            <li><span class="info-label">Job Position:</span> ${
              jobPosition || "N/A"
            }</li>
            <li><span class="info-label">Enquiry Reason:</span> ${enquiryReason}</li>
            <li><span class="info-label">Country:</span> ${country}</li>
            <li><span class="info-label">State:</span> ${state || "N/A"}</li>
            <li><span class="info-label">City:</span> ${city}</li>
            <li><span class="info-label">Zip:</span> ${zip || "N/A"}</li>
          </ul>
          ${message ? `<p class="message"><b>Message:</b> ${message}</p>` : ""}
          <p class="footer">**We will be in touch shortly to discuss your enquiry further.**</p>
        </div>
      </body>
      </html>`,
    };
    const mailResponse = await transport.sendMail(mailOptions);
    console.log("Mail sent successfully:", mailResponse.messageId);
    return mailResponse;
  } catch (error) {
    console.error("Error sending email:", error);
    throw error; // Re-throw to propagate the error
  }
};

module.exports = { sendDetails, sendEnquiry, sendContact };
