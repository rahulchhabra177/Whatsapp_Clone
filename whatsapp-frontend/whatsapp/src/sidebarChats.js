import React from 'react'
import {Avatar} from "@material-ui/core";
import "./sidebarChats.css"
function sidebarChats() {
	return (
		<div className="sidebarChats">
<Avatar src="https://www.pinkvilla.com/files/styles/contentpreview/public/vicks.jpg?itok=9_t0rE4h"/>
			<div className="sidebarChats_info">
<h2>Contact name</h2>
<p>Last Meassage</p>

			</div>
		</div>
	)
}

export default sidebarChats