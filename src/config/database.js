const mongoose = require("mongoose")

const connectDB = async ()=>{
    await mongoose.connect("mongodb+srv://Dev-Tinder:<db_password>@cluster0.5rmc9.mongodb.net/dev-tinder")
}

connectDB()
.then(()=>{
 console.log("connected to mongoDB");
})
.catch(()=>{
 console.log("something  wrong");
})
    
