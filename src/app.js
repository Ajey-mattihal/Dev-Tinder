const express = require('express');
require("./config/database")

const app = express();



app.listen(3333, ()=>{
    console.log('server is running on port 3333...')
});