const User = require("../models/usermodel");
const { StatusCodes } = require("http-status-codes");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const secret = "secret";
const register = async (req, res) => {
   const { email, password, name } = req.body;
   
   try {
      const oldUser = await User.findOne({
         email,
      });

      if (oldUser) {
         return res.status(400).json({
            message: "bunday user allaqachon mavjud",
         });
      }
      const hashPassword = await bcrypt.hash(password, 4);
      const result = await User.create({
         name,
         email,
         password: hashPassword,
      });

      const token = jwt.sign({ email: result.email, id: result._id }, secret, {
         expiresIn: "1h",
      });
      res.status(201).json({
         result,
         token:token
      });
   } catch (error) {
      res.status(400).json({
         message: "register error",
      });
      console.log(error);
   }
};
const login = async (req, res) => {
   const { email, password } = req.body;
   try {
      const OldUser = await User.findOne({ email });
      if (!OldUser) {
         return res.status(400).json({ message: "Parol yoki Email Xato" });
      }
      const comparePassword = await bcrypt.compare(password, OldUser.password);
      if (!comparePassword) {
         return res.status(400).json({
            message: "Parol yoki email Xatodir",
         });
      }
      const token = jwt.sign({ email: OldUser.email, id: OldUser._id }, secret, { expiresIn: "1h" });
      res.status(201).json({ result: OldUser, token });
   } catch (error) {
      res.status(400).json({
         message: "nimadir xato ketdi",
      });
      console.log(error);
   }
};

module.exports = {
   register,
   login,
};
