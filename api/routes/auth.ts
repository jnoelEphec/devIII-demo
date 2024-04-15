import { IUser, User } from './../databases/mongodb/entities/user';
import express, { Request, Response } from 'express';
const router = express.Router();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

router.post("/login", async (req: Request, res: Response) => {
  const { username, password } = req.body;
  try {
      const user = await User.findOne({ username });

      if (!user) {
          return res.status(404).json({ message: "User not found" });
      }

      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
          return res.status(401).json({ message: "Password is incorrect" });
      }

      const token = jwt.sign(
          { userId: user._id, username: user.username },
          "JESUISCenséEtrePrivéEtParExempleDansLe______ .env",
          { expiresIn: '1h' }
      );

      res.json({ message: "Logged in successfully", token });
  } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Server error" });
  }
});

router.post("/register", async (req: Request, res: Response) => {
    const { username, password, email } = req.body;

    try {
        const existingUser = await User.findOne({ $or: [{ email }, { username }] });
        if (existingUser) {
            return res.status(409).json({ message: "User already exists with given email or username." });
        }

        const user = new User({
            username,
            password,
            email
        } as IUser);

        await user.save();

        res.status(201).json({ message: "User created successfully", userId: user._id });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Failed to create user" });
    }
});

export default router;