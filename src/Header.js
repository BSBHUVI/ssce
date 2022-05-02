import React, { useState } from 'react'
import styled from 'styled-components'

import { useNavigate } from "react-router";
import { useUserAuth } from './context/UserAuthContext';

import {
   
    Link,
    Outlet,
  } from "react-router-dom";
  import MenuIcon from '@mui/icons-material/Menu';


import CloseIcon from '@mui/icons-material/Close';
import ChatIcon from '@mui/icons-material/Chat';
import { IconButton } from '@mui/material';

function Header() {
    const [burgerStatus,setburgerStatus]=useState(false);
    const { logOut, user } = useUserAuth();
    const navigate = useNavigate();
    const handleLogout = async () => {
      try {
        await logOut();
        navigate("/ssce");
      } catch (error) {
        console.log(error.message);
      }
    };
   
  
  return (
    <>
    
      
    <Container>
    <IconButton>
    <Link to="/ssce/header/chat">
     <ChatIcon fontSize='large'/>
     </Link>
     </IconButton>
    
      <Menu>
      <IconButton>
   
    <h1 className='text'>Sri Sairam College Of Engineering</h1>
  
    </IconButton>
    
         
          
       
  
      </Menu>
     
      <RightMenu>
         
          <CustomMenu fontSize='large' onClick={()=>setburgerStatus(true)}/>
        
         
      </RightMenu>
      <BurgerNav show={burgerStatus}>
          <CloseWrapper>
          <CustomClose onClick={()=>setburgerStatus(false)}/> 
  
           </CloseWrapper>
           <p className='sub ui'>{user.email}</p>
          <Link to="/ssce/header/cse" className='sub'><button className='ui'> COMPUTER SCIENCE AND ENGINEERING
    
  </button></Link>
          <Link to="/ssce/header/ece" className='sub'><button className='ui'> ELECTRONICS AND COMMUNICATION ENGINEERING
    
  </button></Link>
          <Link to="/ssce/header/eee" className='sub'><button className='ui'> ELECTRICAL AND ELECTRONICS ENGINEERGING
    
  </button></Link>
          <Link to="/ssce/header/mec" className='sub'><button className='ui'> MECHANICAL ENGINEERING
    
  </button></Link>
 <button className='sub ui'  onClick={handleLogout}>logout</button>
        
         
          
         
      </BurgerNav>
     
      
   
    </Container>
   <Outlet/>
    </>
    
  )
  }

export default Header
const Container=styled.div`
min-height:60px;
position:fixed;
display:flex;
align-items:center;
background:rgb(240, 191, 191);;
justify-content:space-between;
padding:0 20px;
top:0;
left:0;
right:0;
border:2px solid black;
z-index:1;

`
const Menu=styled.div`
display:flex;
align-items:center;

justify-content:center;
flex:1;
a{
  font-weight:600;
  text-transform:uppercase;
  padding:0 10px;
  flex-wrap:no-wrap;
}
@media(max-width:768px){
  display:none;
}



`
const RightMenu=styled.div`
display:flex;

align-items:center;
a{
  font-weight:600;
  text-transform:uppercase;
  margin:10px;

}
`
const CustomMenu=styled(MenuIcon)`
cursor:pointer;
`
const BurgerNav=styled.div`
position:fixed;
top:0;
bottom:0;
border:2px solid black;

right:0;
background:rgb(225, 163, 81);
width:300px;
z-index:16;
list-style:none;
padding:0px;
display:flex;
text-align:start;
flex-direction:column;
transform:${props=>props.show? `translateX(0)`:`translateX(100%)`};
transition: transform 0.2s ;
li{
  padding:15px;
  border-bottom:1px solid rgba(0,0,0,0.2);
  a{
      font-weight:600;
  }
}

`
const CustomClose=styled(CloseIcon)`
cursor:pointer;
`
const CloseWrapper=styled.div`
display:flex;
justify-content:flex-end;

`






