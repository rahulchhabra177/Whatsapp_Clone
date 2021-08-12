 import React from 'react'
import "./chatbar.css";
import {Avatar, IconButton} from "@material-ui/core";
import { SearchOutlined, AttachFile,MoreVert,InsertEmoticon} from "@material-ui/icons";
import MicIcon from "@material-ui/icons/Mic"
function chatbar() {
	return (
		<div className="chatbar">
		<div className="chat_header">
<Avatar src="https://www.pinkvilla.com/files/styles/contentpreview/public/vicks.jpg?itok=9_t0rE4h"/>
<div className="chat_headerInfo">
<h2>Vicky Kaushal</h2>
<p>Last seen nveer</p>
</div>		

<div className="chat_headerRight">
<IconButton>
<SearchOutlined/>
</IconButton>
<IconButton>
<AttachFile/>
</IconButton>
<IconButton>
<MoreVert/>
</IconButton>


</div>


</div>



<div className="chat__body">


<p className="chat__message">

<span className="chat_name">
Rahul</span>
This is a message
<span className="chat_time">
12PM</span>

</p>


<p className="chat__message">

<span className="chat_name">
Rahul</span>
This is a message
<span className="chat_time">
12PM</span>

</p>
<p className="chat__message chat__recieve">

<span className="chat_name">
Rahul</span>
This is a message
<span className="chat_time">
12PM</span>

</p>
<p className="chat__message">

<span className="chat_name">
Rahul</span>
This is a message
<span className="chat_time">
12PM</span>

</p><p className="chat__message chat__recieve">

<span className="chat_name">
Rahul</span>
This is a message
<span className="chat_time">
12PM</span>

</p>
<p className="chat__message">

<span className="chat_name">
Rahul</span>
This is a message
<span className="chat_time">
12PM</span>

</p><p className="chat__message chat__recieve">

<span className="chat_name">
Rahul</span>
This is a message
<span className="chat_time">
12PM</span>

</p>
<p className="chat__message">

<span className="chat_name">
Rahul</span>
This is a message
<span className="chat_time">
12PM</span>

</p>

<p className="chat__message chat__recieve">

<span className="chat_name">
Rahul</span>
This is a message
<span className="chat_time">
12PM</span>

</p>
<p className="chat__message">

<span className="chat_name">
Rahul</span>
This is a message
<span className="chat_time">
12PM</span>

</p>
<p className="chat__message chat__recieve">

<span className="chat_name">
Rahul</span>
This is a message
<span className="chat_time">
12PM</span>

</p>
<p className="chat__message">

<span className="chat_name">
Rahul</span>
This is a message
<span className="chat_time">
12PM</span>

</p>
</div>
<div className="chat__footer">

<InsertEmoticon/>


<form>
<input type="text" placeholder="Type a Meassage"/>
<button type="submit">Send a message</button>
<MicIcon/>

</form>
</div>
		</div>
	)
}

export default chatbar