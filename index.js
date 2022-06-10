const express = require("express");
require("dotenv").config();
const app = express();
const connectDB = require("./connect/db");
connectDB();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
const authRouter=require("./router/authRouter")
const jobRouter=require("./router/JobRouter")



app.use("/api/v1/auth",authRouter)
app.use("/api/v1/job",jobRouter)

app.get("/",(req,res)=>[
    res.send("salom")
])





const PORT = process.env.PORT || 3000;

app.listen(PORT, `127.0.0.2`, console.log("server ishladi"));