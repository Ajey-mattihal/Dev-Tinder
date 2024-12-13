const express = require('express');
require("./config/database");
const User = require("./models/user")

const app = express();
app.use(express.json());

app.post('/signup', async(req,res)=>{
    const user = new  User(req.body)
    

    
    try {
        await user.save();
        res.send("user successfully added")
        
    } catch (error) {

        res.status(400).send('something went wrong')

    }
  


});

app.get("/user", async(req,res)=>{
    const userEmail = req.body.emailId;

try {
    const user = await User.find({emailId:userEmail});
    res.send(user);
    
} catch (error) {
    res.status(400).send("something went wrong")
    
}


})


app.delete("/user", async(req,res)=>{
    const userId = req.body.userId;

    try {

        const user = await User.findByIdAndDelete(userId);
        res.send("user deleted successfully")
        
    } catch (err) {
res.status(400).send("something went wrong")
    }
});



app.listen(3333, ()=>{
    console.log('server is running on port 3333...')
});