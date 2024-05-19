import express from "express";
import bcrypt from "bcrypt";
import { UserModel } from "../models/User"; // Adjust the path according to your project structure

const router = express.Router();

router.post("/register", async (req, res) => {
  const { username, password, confirmPassword } = req.body;

  // Validate the request
  if (!username || !password || !confirmPassword) {
    return res.status(400).json({ message: "All fields are required" });
  }

  if (password !== confirmPassword) {
    return res.status(400).json({ message: "Passwords do not match" });
  }

  try {
    // Check if the user already exists
    const existingUser = await UserModel.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ message: "Username is already taken" });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const newUser = new UserModel({ username, password: hashedPassword });
    await newUser.save();

    // Respond with success
    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

export default router;
