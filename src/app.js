const express = require('express');

const app = express();

app.use("/",  (req,res)=>{
    res.send('ajay ')
})

app.listen(3333, ()=>{
    console.log('server is running on port 3333...')
});