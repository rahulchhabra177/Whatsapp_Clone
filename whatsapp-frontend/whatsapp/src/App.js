import './App.css';
import Sidebar from "./sidebar";
import Chatbar from "./chatbar";
import Pusher from "pusher-js";
import {useEffect,useState} from 'react';
import Axios from './axios.js';
function App() {
	const [messages,setmessages]=useState([]);
console.log("namste duniya");

useEffect(()=>{
Axios.get('/api/messages/').then((response)=>{
	console.log("namste duniya1");
	console.log(response.data);
	setmessages(response.data);
	console.log("namste duniya2");
});


// async function fetchPosts(){
// 	const response=await Axios.get('/api/messages/');
// 	setmessages(response.data);
// 	return response;
// }
// fetchPosts();


},[]);




useEffect(()=>{

    const pusher = new Pusher('88842bfff54145ae8adc', {
      cluster: 'ap2'
    });

    const channel = pusher.subscribe('messages');
    channel.bind('inserted', function(data) {
      alert(JSON.stringify(data));
      setmessages([...messages,data]);
    });
},[messages]);


console.log("namste duniya3");
console.log(messages);
console.log("namste duniya4");

  return (
    <div className="app">
    <div className="app_body">
 <Sidebar/>
      <Chatbar/>
    </div>
     
    </div>
  );
}

export default App;
