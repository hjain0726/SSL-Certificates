const express = require('express');
const https = require("https");
const httpsOptions = require("./utils/httpskeys");

const app = express();

app.get('/',(req,res)=>{
    res.send('welcome to secure site');
});

https.createServer(httpsOptions, app).listen(process.env.PORT || 3000, () => {
    console.log("HTTPS Server Start....");
});
