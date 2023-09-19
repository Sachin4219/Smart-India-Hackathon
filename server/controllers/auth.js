import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/User.js";
import Judge from "../models/Judge.js";
import Advocate from "../models/Advocate.js";

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
    console.log(req.body);
    const { profile, firstName, lastName, caseId, courtId, advId, phoneNumber, password } =
      req.body;
    const salt = await bcrypt.genSalt();
    const passwordHash = await bcrypt.hash(password, salt);
    // console.log(passwordHash)
    if (profile === "User") {
      const newUser = new User({
        firstName,
        lastName,
        phoneNumber,
        caseId,
        password: passwordHash,
        // picturePath
      });
      const savedUser = await newUser.save();
      res.status(201).json({ data: savedUser });
    }
    else if (profile === "Advocate") {
      const newAdvocate = new Advocate({
        firstName,
        lastName,
        advId,
        password: passwordHash,
        // picturePath
      });
      const savedAdvocate = await newAdvocate.save();
      res.status(201).json({ data: savedAdvocate });
    }
    else if (profile === "Judge") {
      const newJudge = new Judge({
        firstName,
        lastName,
        courtId,
        password: passwordHash,
        // picturePath
      });
      const savedJudge = await newJudge.save();
      res.status(201).json({ data: savedJudge });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
    // console.log('error');
  }
};

// LOGIN USER

export const login = async (req, res) => {
  try {
    console.log(req.body);
    const { profile, caseId, courtId, advId, phoneNumber, password } = req.body;
    if (profile === "User") {
      const user = await User.findOne({ phoneNumber });
      console.log(user);
      if (!user) return res.status(400).json({ msg: "User does not exist. " });

      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) return res.status(400).json({ msg: "Invalid Credentials. " });

      const token = jwt.sign({ phoneNumber, caseId }, "alahamora");

      res.status(200).json({ profile: "User", token, user });
    }
    else if (profile === "Advocate") {
      const advocate = await Advocate.findOne({ advId });
      console.log(advocate);
      if (!advocate) return res.status(400).json({ msg: "advocate does not exist. " });

      const isMatch = await bcrypt.compare(password, advocate.password);
      if (!isMatch) return res.status(400).json({ msg: "Invalid Credentials. " });

      const token = jwt.sign(advId, "alahamora");

      res.status(200).json({ profile: "Advocate", token, advocate });
    }
    else if (profile === "Judge") {
      const judge = await Judge.findOne({ courtId });
      console.log(judge);
      if (!judge) return res.status(400).json({ msg: "judge does not exist. " });

      const isMatch = await bcrypt.compare(password, judge.password);
      console.log(isMatch);
      if (!isMatch) return res.status(400).json({ msg: "Invalid Credentials. " });

      const token = jwt.sign(courtId, "alahamora");

      res.status(200).json({ profile: "Judge", token, judge });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
