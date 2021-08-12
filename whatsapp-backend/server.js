// //imports

// // import express from "express"
// // import mongoose from "mongoose";
// // import Messages from "./dbmessages.js";
// //import Pusher from "pusher"
// //import Cors from "cors";
const express=require('express');
const mongoose=require('mongoose');
const Pusher = require("pusher");
const Cors=require('cors');
const Messages=require('./dbmessages.js');

// //appconfig
const app=express();
const port=process.env.PORT||7000;

const pusher = new Pusher({
  appId: "1207202",
  key: "88842bfff54145ae8adc",
  secret: "457fcfaa84e42f6ce760",
  cluster: "ap2",
  useTLS: true
});
// //middleware

app.use(express.json());
app.use(Cors());
	app.use((req,res,next)=>{
		res.setHeader("Access-Control-Allow-Origin","*");
		res.setHeader("Access-Control-Allow-Headers","*");
		next();
	});

// //DB config
const connection_url="mongodb+srv://admin:admin@cluster0.fluq3.mongodb.net/whatsapp-realtime?retryWrites=true&w=majority";
mongoose.connect(connection_url,{
	useCreateIndex:true,
	useNewUrlParser:true,
	useUnifiedTopology:true 
})
const db=mongoose.connection;
db.once('open',()=>{
	console.log('db is connecteed');
	const msgCollection=db.collection('messagecontents');
	const changeStream=msgCollection.watch()
	;
	changeStream.on('change',(change)=>{
console.log(change);
if (change.operationType=='insert'){

const messageDetails = change.fullDocument;
pusher.trigger('messages','inserted',{
	name:messageDetails.name,
	message:messageDetails.message,
	time:messageDetails.time
});


}
else{
	console.log('Error Triggering pusher\n');
}

	})
});

// //left at 11:02
// //???


// //api routes
app.get('/',(req,res)=>res.status(200).send("HELLO WORLD\n"));
app.post('/api/messages/',(req,res)=>{

const dbMessage=req.body
Messages.create(
dbMessage,
(err,data)=>{

if (err){
	res.status(500).send(err);
}
else{
	res.status(201).send(`new message created:${data}`)
}


}
	)



});

app.get('/api/messages/',(req,res)=>{

Messages.find(

(err,data)=>{

if (err){
	res.status(500).send(err);
}
else{
	res.status(201).send(`new message get:${data}`)
}


}
	)



})
// //listener


app.listen(port,()=>console.log(`Listening on localhost:${port}`));