import React from 'react'
import './App.css'

import {
   
    Link,
    Outlet,
  } from "react-router-dom";

function Navbar() {
    return (
      <div className='navb'>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              CSE
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
              <Link className="btn btn-primary mx-5 my-1" to="/ssce/header/cse/21Mat11">
                21Mat11
              </Link>
            </li>
            <li>
              <Link className="btn btn-primary mx-5 my-1" to="/ssce/header/cse/21CHE12">
                21che12
              </Link>
            </li>
            <li>
              <Link className="btn btn-primary mx-5 my-1" to="/ssce/header/cse/21CPS13">
                21cps13
              </Link>
            </li>
            <li>
              <Link className="btn btn-primary mx-5 my-1" to="/ssce/header/cse/21ELN14">
                21ELN14
              </Link>
            </li>
            <li>
              {" "}
              <Link className="btn btn-primary mx-5 my-1" to="/ssce/header/cse/21ME15">
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
              <Link className="btn btn-primary mx-5 my-1" to="/ssce/header/cse/21Mat21">
                21Mat21
              </Link>
            </li>
            <li>
              <Link className="btn btn-primary mx-5 my-1" to="/ssce/header/cse/21PHY12">
                21PHY12
              </Link>
            </li>
            <li>
              <Link className="btn btn-primary mx-5 my-1" to="/ssce/header/cse/21ELE13">
                21ELE13
              </Link>
            </li>
            <li>
              <Link className="btn btn-primary mx-5 my-1" to="/ssce/header/cse/21CIV14">
                21CIV14
              </Link>
            </li>
            <li>
              {" "}
              <Link className="btn btn-primary mx-5 my-1" to="/ssce/header/cse/21EGDL25">
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
              <Link className="btn btn-primary mx-5 my-1" to="/ssce/header/cse/18MAT31">
                18MAT31
              </Link>
            </li>
            <li>
              <Link className="btn btn-primary mx-5 my-1" to="/ssce/header/cse/18CS32">
                18CS32
              </Link>
            </li>
            <li>
              <Link className="btn btn-primary mx-5 my-1" to="/ssce/header/cse/18CS33">
                18CS33
              </Link>
            </li>
            <li>
              <Link className="btn btn-primary mx-5 my-1" to="/ssce/header/cse/18CS34">
                18CS34
              </Link>
            </li>
            <li>
              {" "}
              <Link className="btn btn-primary mx-5 my-1" to="/ssce/header/cse/18CS35">
                18CS35
              </Link>
            </li>
            <li>
              {" "}
              <Link className="btn btn-primary mx-5 my-1" to="/ssce/header/cse/18CS36">
                18CS36
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
              <Link className="btn btn-primary mx-5 my-1" to="/ssce/header/cse/18MAT41">
                18MAT41
              </Link>
            </li>
            <li>
              <Link className="btn btn-primary mx-5 my-1" to="/ssce/header/cse/18CS42">
                18CS42
              </Link>
            </li>
            <li>
              <Link className="btn btn-primary mx-5 my-1" to="/ssce/header/cse/18CS43">
                18CS43
              </Link>
            </li>
            <li>
              <Link className="btn btn-primary mx-5 my-1" to="/ssce/header/cse/18CS44">
                18CS44
              </Link>
            </li>
            <li>
              {" "}
              <Link className="btn btn-primary mx-5 my-1" to="/ssce/header/cse/18CS45">
                18CS45
              </Link>
            </li>
            <li>
              {" "}
              <Link className="btn btn-primary mx-5 my-1" to="/ssce/header/cse/18CS46">
                18CS46
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
              <Link className="btn btn-primary mx-5 my-1" to="/ssce/header/cse/18CS51">
                18CS51
              </Link>
            </li>
            <li>
              <Link className="btn btn-primary mx-5 my-1" to="/ssce/header/cse/18CS52">
                18CS52
              </Link>
            </li>
            <li>
              <Link className="btn btn-primary mx-5 my-1" to="/ssce/header/cse/18CS53">
                18CS53
              </Link>
            </li>
            <li>
              <Link className="btn btn-primary mx-5 my-1" to="/ssce/header/cse/18CS54">
                18CS54
              </Link>
            </li>
            <li>
              {" "}
              <Link className="btn btn-primary mx-5 my-1" to="/ssce/header/cse/18CS55">
                18CS55
              </Link>
            </li>
            <li>
              {" "}
              <Link className="btn btn-primary mx-5 my-1" to="/ssce/header/cse/18CS56">
                18CS56
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
              <Link className="btn btn-primary mx-5 my-1" to="/ssce/header/cse/18CS61">
                18CS61
              </Link>
            </li>
            <li>
              <Link className="btn btn-primary mx-5 my-1" to="/ssce/header/cse/18CS62">
                18CS62
              </Link>
            </li>
            <li>
              <Link className="btn btn-primary mx-5 my-1" to="/ssce/header/cse/18CS63">
                18CS63
              </Link>
            </li>
            <li>
              <Link className="btn btn-primary mx-5 my-1" to="/ssce/header/cse/18CS64">
                18CS64
              </Link>
            </li>
            <li>
              {" "}
              <Link className="btn btn-primary mx-5 my-1" to="/ssce/header/cse/18CS65">
                18CS65
              </Link>
            </li>
            <li>
              {" "}
              <Link className="btn btn-primary mx-5 my-1" to="/ssce/header/cse/18CS66">
                18CS66
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
              <Link className="btn btn-primary mx-5 my-1" to="/ssce/header/cse/18CS71">
                18CS71
              </Link>
            </li>
            <li>
              <Link className="btn btn-primary mx-5 my-1" to="/ssce/header/cse/18CS72">
                18CS72
              </Link>
            </li>
            <li>
              <Link className="btn btn-primary mx-5 my-1" to="/ssce/header/cse/18CS73">
                18CS73
              </Link>
            </li>
            <li>
              <Link className="btn btn-primary mx-5 my-1" to="/ssce/header/cse/18CS74">
                18CS74
              </Link>
            </li>
            <li>
              {" "}
              <Link className="btn btn-primary mx-5 my-1" to="/ssce/header/cse/18CS75">
                18CS75
              </Link>
            </li>
            <li>
              {" "}
              <Link className="btn btn-primary mx-5 my-1" to="/ssce/header/cse/18CS76">
                18CS76
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
              <Link className="btn btn-primary mx-5 my-1" to="/ssce/header/cse/18CS81">
                18CS81
              </Link>
            </li>
            <li>
              <Link className="btn btn-primary mx-5 my-1" to="/ssce/header/cse/18CS82">
                18CS82
              </Link>
            </li>
            <li>
              <Link className="btn btn-primary mx-5 my-1" to="/ssce/header/cse/18CS83">
                18CS83
              </Link>
            </li>
            <li>
              <Link className="btn btn-primary mx-5 my-1" to="/ssce/header/cse/18CS84">
                18CS84
              </Link>
            </li>
            <li>
              {" "}
              <Link className="btn btn-primary mx-5 my-1" to="/ssce/header/cse/18CS85">
                18CS85
              </Link>
            </li>
            <li>
              {" "}
              <Link className="btn btn-primary mx-5 my-1" to="/ssce/header/cse/18CS86">
                18CS86
              </Link>
            </li>
          </ul>
        </div>
  
        <Outlet />
      </div>
    );
  }

export default Navbar
