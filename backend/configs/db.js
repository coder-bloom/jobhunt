const mongoose = require("mongoose");
const dotenv = require("dotenv")

dotenv.config();

const connect = async () => {
    try {
       await mongoose.connect(process.env.MONGO_URL , {
        useNewUrlParser:true,
        useUnifiedTopology:true,
       })
       console.log("connected to database");

    } catch (error) {
        console.log("error while connecting tto database" , error)
    }
}

module.exports = connect;