import React from 'react'
import './App.css'

import {

    Link,
    Outlet,
  } from "react-router-dom";

function Navbar3() {
    return (
      <div className='navb'>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              Payment
            </Link>
          </div>
        </nav>
        <div className="payment">
          <h1>list of payments available</h1>
          <table>
            <tr>
              <th>Sl no</th>
              <th>Payment type </th>
              <th>Payment Link</th>
            </tr>
            <tr>
              <td>1</td>
              <td>credit card</td>
              <td><a target="_blank" href="https://paytm.me/0id-3Q6">credit card</a></td>
            </tr>
            <tr>
              <td>2</td>
              <td>Debit card</td>
              <td><a target="_blank" href="https://paytm.me/0id-3Q6">Debit card</a></td>
            </tr>
            <tr>
              <td>3</td>
              <td>Phone pe</td>
              <td><a target="_blank" href="https://paytm.me/0id-3Q6">Phone pe</a></td>
            </tr>
            <tr>
              <td>4</td>
              <td>Paytm</td>
              <td><a target="_blank" href="https://paytm.me/0id-3Q6">Paytm</a></td>
            </tr>
            <tr>
              <td>5</td>
              <td>Google pay</td>
              <td><a target="_blank" href="https://paytm.me/0id-3Q6">Google pay</a></td>
            </tr>
            <tr>
              <td>6</td>
              <td>Amazon Pay</td>
              <td><a target="_blank" href="https://paytm.me/0id-3Q6">Amazon Pay</a></td>
            </tr>
            <tr>
              <td>7</td>
              <td>Upi</td>
              <td><a target="_blank" href="https://paytm.me/0id-3Q6">UPI</a></td>
            </tr>
            <tr>
              <td>8</td>
              <td>EMI</td>
              <td><a target="_blank" href="https://paytm.me/0id-3Q6">EMI</a></td>
            </tr>
          </table>
        </div>
        <Outlet/>
       
      </div>
    );
  }

export default Navbar3
