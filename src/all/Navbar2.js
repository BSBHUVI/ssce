import React from 'react'
import './App.css'

import {
    
    Link,
    Outlet,
  } from "react-router-dom";

function Navbar2() {
    return (
      <div className='navb'>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              ECE
            </Link>
          </div>
        </nav>
        <div className="bg-light text-dark">
          <Link
            class="nav-link dropdown-toggle"
            to="/"
            id="navbarDropdown"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            c-cycle
          </Link>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li>
              <Link className="btn btn-primary mx-5 my-1" to="/header/ece/21Mat11">
                21Mat11
              </Link>
            </li>
            <li>
              <Link className="btn btn-primary mx-5 my-1" to="/header/ece/21CHE12">
                21che12
              </Link>
            </li>
            <li>
              <Link className="btn btn-primary mx-5 my-1" to="/header/ece/21CPS13">
                21cps13
              </Link>
            </li>
            <li>
              <Link className="btn btn-primary mx-5 my-1" to="/header/ece/21ELN14">
                21ELN14
              </Link>
            </li>
            <li>
              {" "}
              <Link className="btn btn-primary mx-5 my-1" to="/header/ece/21ME15">
                21ME15
              </Link>
            </li>
          </ul>
  
          <Link
            class="nav-link dropdown-toggle"
            to="/"
            id="navbarDropdown"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            p-cycle
          </Link>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li>
              <Link className="btn btn-primary mx-5 my-1" to="/header/ece/21Mat21">
                21Mat21
              </Link>
            </li>
            <li>
              <Link className="btn btn-primary mx-5 my-1" to="/header/ece/21PHY12">
                21PHY12
              </Link>
            </li>
            <li>
              <Link className="btn btn-primary mx-5 my-1" to="/header/ece/21ELE13">
                21ELE13
              </Link>
            </li>
            <li>
              <Link className="btn btn-primary mx-5 my-1" to="/header/ece/21CIV14">
                21CIV14
              </Link>
            </li>
            <li>
              {" "}
              <Link className="btn btn-primary mx-5 my-1" to="/header/ece/21EGDL25">
                21EGDL25
              </Link>
            </li>
          </ul>
          <Link
            class="nav-link dropdown-toggle"
            to="/"
            id="navbarDropdown"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            3rd-sem
          </Link>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li>
              <Link className="btn btn-primary mx-5 my-1" to="/header/ece/18MAT31">
                18MAT31
              </Link>
            </li>
            <li>
              <Link className="btn btn-primary mx-5 my-1" to="/header/ece/18EC32">
                18EC32
              </Link>
            </li>
            <li>
              <Link className="btn btn-primary mx-5 my-1" to="/header/ece/18EC33">
                18EC33
              </Link>
            </li>
            <li>
              <Link className="btn btn-primary mx-5 my-1" to="/header/ece/18EC34">
                18EC34
              </Link>
            </li>
            <li>
              {" "}
              <Link className="btn btn-primary mx-5 my-1" to="/header/ece/18EC35">
                18EC35
              </Link>
            </li>
            <li>
              {" "}
              <Link className="btn btn-primary mx-5 my-1" to="/header/ece/18EC36">
                18EC36
              </Link>
            </li>
          </ul>
          <Link
            class="nav-link dropdown-toggle"
            to="/"
            id="navbarDropdown"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            4th-sem
          </Link>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li>
              <Link className="btn btn-primary mx-5 my-1" to="/header/ece/18MAT41">
                18MAT41
              </Link>
            </li>
            <li>
              <Link className="btn btn-primary mx-5 my-1" to="/header/ece/18EC42">
                18EC42
              </Link>
            </li>
            <li>
              <Link className="btn btn-primary mx-5 my-1" to="/header/ece/18EC43">
                18EC43
              </Link>
            </li>
            <li>
              <Link className="btn btn-primary mx-5 my-1" to="/header/ece/18EC44">
                18EC44
              </Link>
            </li>
            <li>
              {" "}
              <Link className="btn btn-primary mx-5 my-1" to="/header/ece/18EC45">
                18EC45
              </Link>
            </li>
            <li>
              {" "}
              <Link className="btn btn-primary mx-5 my-1" to="/header/ece/18EC46">
                18EC46
              </Link>
            </li>
          </ul>
          <Link
            class="nav-link dropdown-toggle"
            to="/"
            id="navbarDropdown"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            5th-sem
          </Link>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li>
              <Link className="btn btn-primary mx-5 my-1" to="/header/ece/18EC51">
                18EC51
              </Link>
            </li>
            <li>
              <Link className="btn btn-primary mx-5 my-1" to="/header/ece/18EC52">
                18EC52
              </Link>
            </li>
            <li>
              <Link className="btn btn-primary mx-5 my-1" to="/header/ece/18EC53">
                18EC53
              </Link>
            </li>
            <li>
              <Link className="btn btn-primary mx-5 my-1" to="/header/ece/18EC54">
                18EC54
              </Link>
            </li>
            <li>
              {" "}
              <Link className="btn btn-primary mx-5 my-1" to="/header/ece/18EC55">
                18EC55
              </Link>
            </li>
            <li>
              {" "}
              <Link className="btn btn-primary mx-5 my-1" to="/header/ece/18EC56">
                18EC56
              </Link>
            </li>
          </ul>
          <Link
            class="nav-link dropdown-toggle"
            to="/"
            id="navbarDropdown"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            6th-sem
          </Link>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li>
              <Link className="btn btn-primary mx-5 my-1" to="/header/ece/18EC61">
                18EC61
              </Link>
            </li>
            <li>
              <Link className="btn btn-primary mx-5 my-1" to="/header/ece/18EC62">
                18EC62
              </Link>
            </li>
            <li>
              <Link className="btn btn-primary mx-5 my-1" to="/header/ece/18EC63">
                18EC63
              </Link>
            </li>
            <li>
              <Link className="btn btn-primary mx-5 my-1" to="/header/ece/18EC64">
                18EC64
              </Link>
            </li>
            <li>
              {" "}
              <Link className="btn btn-primary mx-5 my-1" to="/header/ece/18EC65">
                18EC65
              </Link>
            </li>
            <li>
              {" "}
              <Link className="btn btn-primary mx-5 my-1" to="/header/ece/18EC66">
                18EC66
              </Link>
            </li>
          </ul>
          <Link
            class="nav-link dropdown-toggle"
            to="/"
            id="navbarDropdown"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            7th-sem
          </Link>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li>
              <Link className="btn btn-primary mx-5 my-1" to="/header/ece/18EC71">
                18EC71
              </Link>
            </li>
            <li>
              <Link className="btn btn-primary mx-5 my-1" to="/header/ece/18EC72">
                18EC72
              </Link>
            </li>
            <li>
              <Link className="btn btn-primary mx-5 my-1" to="/header/ece/18EC73">
                18EC73
              </Link>
            </li>
            <li>
              <Link className="btn btn-primary mx-5 my-1" to="/header/ece/18EC74">
                18EC74
              </Link>
            </li>
            <li>
              {" "}
              <Link className="btn btn-primary mx-5 my-1" to="/header/ece/18EC75">
                18EC75
              </Link>
            </li>
            <li>
              {" "}
              <Link className="btn btn-primary mx-5 my-1" to="/header/ece/18EC76">
                18EC76
              </Link>
            </li>
          </ul>
          <Link
            class="nav-link dropdown-toggle"
            to="/"
            id="navbarDropdown"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            8th-sem
          </Link>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li>
              <Link className="btn btn-primary mx-5 my-1" to="/header/ece/18EC81">
                18EC81
              </Link>
            </li>
            <li>
              <Link className="btn btn-primary mx-5 my-1" to="/header/ece/18EC82">
                18EC82
              </Link>
            </li>
            <li>
              <Link className="btn btn-primary mx-5 my-1" to="/header/ece/18EC83">
                18EC83
              </Link>
            </li>
            <li>
              <Link className="btn btn-primary mx-5 my-1" to="/header/ece/18EC84">
                18EC84
              </Link>
            </li>
            <li>
              {" "}
              <Link className="btn btn-primary mx-5 my-1" to="/header/ece/18EC85">
                18EC85
              </Link>
            </li>
            <li>
              {" "}
              <Link className="btn btn-primary mx-5 my-1" to="/header/ece/18EC86">
                18EC86
              </Link>
            </li>
          </ul>
        </div>
  
        <Outlet />
      </div>
    );
  }

export default Navbar2
