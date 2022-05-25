import React from 'react'
import './App.css'

import {

    Link,
    Outlet,
  } from "react-router-dom";

function Navbar4() {
    return (
      <div className='navb'>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              Contact
            </Link>
          </div>
        </nav>
        <div className="about">
          <h1>Zomato Details</h1>
          <p>Zomato (/zoʊmɑːtoʊ/) is an Indian multinational restaurant aggregator and food delivery company founded by Deepinder Goyal and Pankaj Chaddah in 2008.[7][8] Zomato provides information, menus and user-reviews of restaurants as well as food delivery options from partner restaurants in select cities.[9] As of 2019, the service is available in 24 countries and in more than 10,000 cities.</p>
          <p>Launched in 2010, Our technology platform connects customers, restaurant partners and delivery partners, serving their multiple needs. Customers use our platform to search and discover restaurants, read and write customer generated reviews and view and upload photos, order food delivery, book a table and make payments while dining-out at restaurants. On the other hand, we provide restaurant partners with industry-specific marketing tools which enable them to engage and acquire customers to grow their business while also providing a reliable and efficient last mile delivery service. We also operate a one-stop procurement solution, Hyperpure, which supplies high quality ingredients and kitchen products to restaurant partners. We also provide our delivery partners with transparent and flexible earning opportunities.</p>
          <div id="demo1">

<h1 class="bh">Contact zomato delivery boy :</h1>
<a target='_blank' href="http://www.instagram.com/bsbhuvi/ "><img className='imga' src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/1024px-Instagram_icon.png" alt="insta link"/></a>
<a target='_blank' href="tel:8884883404"><img className='imga' src="https://www.kindpng.com/picc/m/194-1943740_phone-icons-80-free-icons-phone-symbol-in.png" alt="call"/></a>
<a target='_blank' href="https://api.whatsapp.com/send?phone=<India-91><8884883404>"><img className='imga' src="https://www.freepnglogos.com/uploads/whatsapp-png-image-9.png" alt="not found"/></a>
 <h1 class="bh">click here to pay bill</h1>
 <a target='_blank' href=" https://paytm.me/0id-3Q6"><img className='imga' src="https://www.kindpng.com/picc/m/12-123461_paytm-logo-in-png-transparent-png.png" alt="not found"/></a>
</div>
        </div>
        <Outlet/>
        
      </div>
    );
  }

export default Navbar4
