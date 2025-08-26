const express = require("express");
const connect = require("./configs/db");
const userrouter = require("./routes/userroute");
const app = express();
const dotenv = require("dotenv");
const cors = require("cors");
dotenv.config();
connect()

app.use(
    cors({
    origin:"http://localhost:5173",
     methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}))

app.use(express.json());
app.use(express.urlencoded({extended:true}))

app.get("/" , (req,res) => {
    res.send("hello")
})
app.use("/api",userrouter);

app.listen(process.env.PORT , () => {
    console.log(`Server is running at Port http://localhost:${process.env.PORT}`);
    
})