const User = require("../models/User");

async function seedDatabase() {
  try {
    // Insert dummy users
    await User.bulkCreate([
      { email: "user1@example.com", password: "password1" }
      // Add more dummy users as needed
    ]);

    console.log("Dummy data inserted successfully");
  } catch (error) {
    console.error("Error inserting dummy data:", error);
  }
}

// Call the function to seed the database
module.exports = seedDatabase();
