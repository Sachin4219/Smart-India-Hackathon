import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/User.js";

export const getUsers = async (req, res) => {
  try {
    const allusers = await User.find();
    res.status(200).json(allusers);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err.message });
  }
};

export const register = async (req, res) => {
  try {
    const { firstName, lastName, caseId, password, picturePath, phoneNumber } =
      req.body;
    // const salt = await bcrypt.genSalt();
    const passwordHash = await bcrypt.hash(password, 10);

    const newUser = new User({
      firstName,
      lastName,
      caseId,
      phoneNumber,
      password: passwordHash,
      // picturePath
    });
    const savedUser = await newUser.save();
    res.status(201).json({ data: savedUser });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// LOGIN USER

export const login = async (req, res) => {
  try {
    const { caseId, phoneNumber, password } = req.body;
    const user = await User.findOne({ phoneNumber });
    console.log(user);
    if (!user) return res.status(400).json({ msg: "User does not exist. " });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ msg: "Invalid Credentials. " });

    const token = jwt.sign({ phoneNumber, caseId }, "alahamora");

    res.status(200).json({ token, user });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
