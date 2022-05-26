import React from 'react'
import './App.css'

import {
    
    Link,
    Outlet,
  } from "react-router-dom";
import Cards from '../Cards';

function Navbar2() {
    return (
      <div className='navb'>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              Orders
            </Link>
          </div>
        </nav>
        <div className="foods">
          <Cards  image="https://th.bing.com/th/id/OIP.CsCxKLgElKLPm9VcuMCF2AHaKD?w=128&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7" price="$20" confirm="✔️ordered"/>
   
          <Cards image="https://www.bing.com/th?id=OIP.jdoo6PhnVomI9e_1YR812AHaEo&w=316&h=197&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2" confirm="✔️ordered" price="$29"/>
          <Cards image="https://www.bing.com/th?id=OIP.lEa60MoPEz7kNWZQBc_a3wHaEo&w=316&h=197&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2" confirm="✔️ordered" price="$25" />
         <Cards image="https://th.bing.com/th/id/OIP.CsCxKLgElKLPm9VcuMCF2AHaKD?w=128&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7" confirm="✔️ordered" price="$10" />
        <Cards image="https://www.bing.com/th?id=OIP.lEa60MoPEz7kNWZQBc_a3wHaEo&w=316&h=197&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2" confirm="✔️ordered" price="$5"/> 
       
    
          </div>
        <Outlet/>
      </div>
      
    );
  }

export default Navbar2
