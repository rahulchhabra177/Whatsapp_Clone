// import mongoose from "mongoose";
const mongoose=require('mongoose');

const whatsappSchema=mongoose.Schema(
	{
		message:String,
		name:String,
		time:String,
		recieved:Boolean
	});

// export default mongoose.model('messages',whatsappSchema);

module.exports=mongoose.model('messagecontent',whatsappSchema);
