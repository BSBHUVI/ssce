
import { ArrowBackIos, InsertEmoticon } from '@mui/icons-material'


import { Mic } from '@mui/icons-material'

import { ArrowForwardIos } from '@mui/icons-material'

import { Avatar } from '@mui/material'
import React from 'react'
import { useState } from 'react'
import axios from './axios'
import './Chat.css'


function Chat({messages}) {
   

  const time=new Date().toLocaleTimeString();
  const time2=time.slice(0,4);
    
    const [input,setInput]=useState("");
    const sendMessage= async (e)=>{
        e.preventDefault();
        if(input===''){
            alert('please enter the value')
        }else{
        axios.post('/messages/new',{
            message:input,
            name:"lakshmi prasad",
            timestamp:time2,
            recieved:true,
        });

        setInput("");
    }
    };
    const sendMessage1= async (e)=>{
        e.preventDefault();
        if(input===''){
            alert('please enter the value')
        }else{
        axios.post('/messages/new',{
            message:input,
            name:"bookika",
            timestamp:time2,
            recieved:false,
        });

        setInput("");
    }
    };
    
  return (
    <div className='chat'>
    <div className="chat__header">
        <Avatar/>
        <div className="chat__headerinfo">
            <h3>SRI SAIRAM COLLEGE OF ENGINEERING</h3>
            <p>{navigator.onLine ? 'online':'offline'}</p>
        </div>
        <div className="chatheaderRight">
       
        </div>
    </div>
    <div className="chat__body">
    {messages.map((message)=>{
       return <p className={`chat__message ${message.recieved && "chat__reciever"}`}>
            <span className='chat__name'>{message.name}</span>
            {message.message}
            <span className='chat__timestamp'>
               {message.timestamp}
            </span>
        </p>

    })}
        
        
       
    </div>
    <div className="chat__footer">
        <InsertEmoticon />
        <form>
            <input value={input} onChange={e=>setInput(e.target.value)} placeholder='type a message' type='text' required />
            <button className='opp' onClick={sendMessage} type='submit'>=
            <ArrowForwardIos/>



            </button>
            <button className='opp' onClick={sendMessage1} type='submit'>=
            <ArrowBackIos/>



            </button>
        </form>
        <Mic/>
    </div>
    
    
      
    </div>
  )
}

export default Chat
