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
              EEE
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
              <Link className="btn btn-primary mx-5 my-1" to="/ssce/header/eee/21Mat11">
                21Mat11
              </Link>
            </li>
            <li>
              <Link className="btn btn-primary mx-5 my-1" to="/ssce/header/eee/21CHE12">
                21che12
              </Link>
            </li>
            <li>
              <Link className="btn btn-primary mx-5 my-1" to="/ssce/header/eee/21CPS13">
                21cps13
              </Link>
            </li>
            <li>
              <Link className="btn btn-primary mx-5 my-1" to="/ssce/header/eee/21ELN14">
                21ELN14
              </Link>
            </li>
            <li>
              {" "}
              <Link className="btn btn-primary mx-5 my-1" to="/ssce/header/eee/21ME15">
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
              <Link className="btn btn-primary mx-5 my-1" to="/ssce/header/eee/21Mat21">
                21Mat21
              </Link>
            </li>
            <li>
              <Link className="btn btn-primary mx-5 my-1" to="/ssce/header/eee/21PHY12">
                21PHY12
              </Link>
            </li>
            <li>
              <Link className="btn btn-primary mx-5 my-1" to="/ssce/header/eee/21ELE13">
                21ELE13
              </Link>
            </li>
            <li>
              <Link className="btn btn-primary mx-5 my-1" to="/ssce/header/eee/21CIV14">
                21CIV14
              </Link>
            </li>
            <li>
              {" "}
              <Link className="btn btn-primary mx-5 my-1" to="/ssce/header/eee/21EGDL25">
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
              <Link className="btn btn-primary mx-5 my-1" to="/ssce/header/eee/18MAT31">
                18MAT31
              </Link>
            </li>
            <li>
              <Link className="btn btn-primary mx-5 my-1" to="/ssce/header/eee/18EE32">
                18EE32
              </Link>
            </li>
            <li>
              <Link className="btn btn-primary mx-5 my-1" to="/ssce/header/eee/18EE33">
                18EE33
              </Link>
            </li>
            <li>
              <Link className="btn btn-primary mx-5 my-1" to="/ssce/header/eee/18EE34">
                18EE34
              </Link>
            </li>
            <li>
              {" "}
              <Link className="btn btn-primary mx-5 my-1" to="/ssce/header/eee/18EE35">
                18EE35
              </Link>
            </li>
            <li>
              {" "}
              <Link className="btn btn-primary mx-5 my-1" to="/ssce/header/eee/18EE36">
                18EE36
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
              <Link className="btn btn-primary mx-5 my-1" to="/ssce/header/eee/18MAT41">
                18MAT41
              </Link>
            </li>
            <li>
              <Link className="btn btn-primary mx-5 my-1" to="/ssce/header/eee/18EE42">
                18EE42
              </Link>
            </li>
            <li>
              <Link className="btn btn-primary mx-5 my-1" to="/ssce/header/eee/18EE43">
                18EE43
              </Link>
            </li>
            <li>
              <Link className="btn btn-primary mx-5 my-1" to="/ssce/header/eee/18EE44">
                18EE44
              </Link>
            </li>
            <li>
              {" "}
              <Link className="btn btn-primary mx-5 my-1" to="/ssce/header/eee/18EE45">
                18EE45
              </Link>
            </li>
            <li>
              {" "}
              <Link className="btn btn-primary mx-5 my-1" to="/ssce/header/eee/18EE46">
                18EE46
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
              <Link className="btn btn-primary mx-5 my-1" to="/ssce/header/eee/18EE51">
                18EE51
              </Link>
            </li>
            <li>
              <Link className="btn btn-primary mx-5 my-1" to="/ssce/header/eee/18EE52">
                18EE52
              </Link>
            </li>
            <li>
              <Link className="btn btn-primary mx-5 my-1" to="/ssce/header/eee/18EE53">
                18EE53
              </Link>
            </li>
            <li>
              <Link className="btn btn-primary mx-5 my-1" to="/ssce/header/eee/18EE54">
                18EE54
              </Link>
            </li>
            <li>
              {" "}
              <Link className="btn btn-primary mx-5 my-1" to="/ssce/header/eee/18EE55">
                18EE55
              </Link>
            </li>
            <li>
              {" "}
              <Link className="btn btn-primary mx-5 my-1" to="/ssce/header/eee/18EE56">
                18EE56
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
              <Link className="btn btn-primary mx-5 my-1" to="/ssce/header/eee/18EE61">
                18EE61
              </Link>
            </li>
            <li>
              <Link className="btn btn-primary mx-5 my-1" to="/ssce/header/eee/18EE62">
                18EE62
              </Link>
            </li>
            <li>
              <Link className="btn btn-primary mx-5 my-1" to="/ssce/header/eee/18EE63">
                18EE63
              </Link>
            </li>
            <li>
              <Link className="btn btn-primary mx-5 my-1" to="/ssce/header/eee/18EE64">
                18EE64
              </Link>
            </li>
            <li>
              {" "}
              <Link className="btn btn-primary mx-5 my-1" to="/ssce/header/eee/18EE65">
                18EE65
              </Link>
            </li>
            <li>
              {" "}
              <Link className="btn btn-primary mx-5 my-1" to="/ssce/header/eee/18EE66">
                18EE66
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
              <Link className="btn btn-primary mx-5 my-1" to="/ssce/header/eee/18EE71">
                18EE71
              </Link>
            </li>
            <li>
              <Link className="btn btn-primary mx-5 my-1" to="/ssce/header/eee/18EE72">
                18EE72
              </Link>
            </li>
            <li>
              <Link className="btn btn-primary mx-5 my-1" to="/ssce/header/eee/18EE73">
                18EE73
              </Link>
            </li>
            <li>
              <Link className="btn btn-primary mx-5 my-1" to="/ssce/header/eee/18EE74">
                18EE74
              </Link>
            </li>
            <li>
              {" "}
              <Link className="btn btn-primary mx-5 my-1" to="/ssce/header/eee/18EE75">
                18EE75
              </Link>
            </li>
            <li>
              {" "}
              <Link className="btn btn-primary mx-5 my-1" to="/ssce/header/eee/18EE76">
                18EE76
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
              <Link className="btn btn-primary mx-5 my-1" to="/ssce/header/eee/18EE81">
                18EE81
              </Link>
            </li>
            <li>
              <Link className="btn btn-primary mx-5 my-1" to="/ssce/header/eee/18EE82">
                18EE82
              </Link>
            </li>
            <li>
              <Link className="btn btn-primary mx-5 my-1" to="/ssce/header/eee/18EE83">
                18EE83
              </Link>
            </li>
            <li>
              <Link className="btn btn-primary mx-5 my-1" to="/ssce/header/eee/18EE84">
                18EE84
              </Link>
            </li>
            <li>
              {" "}
              <Link className="btn btn-primary mx-5 my-1" to="/ssce/header/eee/18EE85">
                18EE85
              </Link>
            </li>
            <li>
              {" "}
              <Link className="btn btn-primary mx-5 my-1" to="/ssce/header/eee/18EE86">
                18EE86
              </Link>
            </li>
          </ul>
        </div>
  
        <Outlet />
      </div>
    );
  }

export default Navbar3
