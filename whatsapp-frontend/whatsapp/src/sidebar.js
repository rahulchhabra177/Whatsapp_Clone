import React from 'react';
import  "./sidebar.css";
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import {Avatar, IconButton} from "@material-ui/core";
import {SearchOutlined} from "@material-ui/icons";
import SidebarChats from "./sidebarChats"
function sidebar() {
	return (
		<div className="sidebar">
			<h1>This is sidebar</h1>
<div className="sidebar_header">
<div className="sidebar_header_left">
<Avatar src="https://www.pinkvilla.com/files/styles/contentpreview/public/vicks.jpg?itok=9_t0rE4h"/>
</div>
<div className="sidebar_header_right">
<IconButton>
<DonutLargeIcon/>
</IconButton>
<IconButton>
<ChatIcon/>
</IconButton>
<IconButton>
<MoreVertIcon/>
</IconButton>

</div>
</div> 



<div className="sidebar_search">
<div className="sidebar_searchContainer">
<IconButton>
<SearchOutlined fontSize="large"/>
</IconButton>
<input type="text" placeholder="Start a new chat or search"/>
</div>
</div>



<div className="sidebar_chats">

<SidebarChats/>
<SidebarChats/>
<SidebarChats/>
<SidebarChats/>

</div>
		</div>
	)
}

export default sidebar