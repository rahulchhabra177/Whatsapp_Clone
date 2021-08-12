//imports

import express from "express"

//appconfig
const app=express();
const port=process.env.PORT||9000;
//middleware

//DB config

//???


//api routes
app.get('/',(req,res)=>res.status(200).send("HELLO WORLD\n"));
//listener


app.listen(port,()=>console.log(`Listening on localhost:${port}`));