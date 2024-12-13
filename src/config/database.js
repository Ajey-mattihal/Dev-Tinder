const mongoose = require("mongoose")


const connectDB = async ()=>{
    await mongoose.connect(
"mongodb://localhost:27017/dev-tinder"
);

};

connectDB()
.then(()=>{
 console.log("database connectuinestablished....");
})
.catch(()=>{
 console.log("something went wrong");
})


