
import { InsertEmoticon } from '@mui/icons-material'


import { Mic } from '@mui/icons-material'

import { ArrowForwardIos } from '@mui/icons-material'

import { Avatar } from '@mui/material'
import React from 'react'
import { useState } from 'react'
import axios from './axios'
import './Chat.css'
import {useUserAuth} from '../context/UserAuthContext'

function Chat({messages}) {
    const {  user } = useUserAuth();

  const time=new Date().toLocaleTimeString();
  const time2=time.slice(0,5);
    
    const [input,setInput]=useState("");
    const sendMessage= async (e)=>{
        e.preventDefault();
        if(input===''){
            alert('please enter the value')
        }else{
        axios.post('/messages/new',{
            message:input,
            name:user.email,
            timestamp:time2,
            recieved:true,
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
        </form>
        <Mic/>
    </div>
    
    
      
    </div>
  )
}

export default Chat
