const mongoose = require("mongoose");

async function connect() {
  try {
    mongoose.connect(
      "mongodb+srv://3alearnings:Harshit7505@cluster0.0vjot11.mongodb.net"
    );
    const connection = mongoose.connection;

    connection.on("connected", () => {
      console.log("Database Connected Successfully!");
    });
    connection.on("error", (err) => {
      console.log(
        "MongoDB connection error. Please make sure MongoDB is running." + err
      );
      process.exit();
    });
  } catch (error) {
    console.log(error.message);
  }
}

module.exports = { connect };
