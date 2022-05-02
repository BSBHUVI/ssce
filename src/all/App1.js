import React from 'react';
import { useEffect } from 'react';
import './App1.css';
import Chat from './Chat';

import Pusher from 'pusher-js';
import axios from './axios';
import { useState } from 'react';

function App1() {
  const [messages,setMessages]=useState([]);
  useEffect(()=>{
    axios.get('/messages/sync').then(response=>{
   
      setMessages(response.data)
    })
   
  },[])
  useEffect(()=>{
    const pusher = new Pusher('7ce1e74809f4f8aa6fc5', {
      cluster: 'ap2'
    });

    const channel = pusher.subscribe('messages');
    channel.bind('inserted',(newMessage)=> {
         
      setMessages([...messages,newMessage]);
    });
    return ()=>{
      channel.unbind_all();
      channel.unsubscribe();
    }

  },[messages]);
  console.log(messages)



  return (
    <div className="app">
    <div className="app__body">
   
     <Chat messages={messages}/>
     </div>
    </div>
  );
}

export default App1;
