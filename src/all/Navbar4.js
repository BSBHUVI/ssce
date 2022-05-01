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
              Mech
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
              <Link className="btn btn-primary mx-5 my-1" to="/header/mec/21Mat11">
                21Mat11
              </Link>
            </li>
            <li>
              <Link className="btn btn-primary mx-5 my-1" to="/header/mec/21CHE12">
                21che12
              </Link>
            </li>
            <li>
              <Link className="btn btn-primary mx-5 my-1" to="/header/mec/21CPS13">
                21cps13
              </Link>
            </li>
            <li>
              <Link className="btn btn-primary mx-5 my-1" to="/header/mec/21ELN14">
                21ELN14
              </Link>
            </li>
            <li>
              {" "}
              <Link className="btn btn-primary mx-5 my-1" to="/header/mec/21ME15">
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
              <Link className="btn btn-primary mx-5 my-1" to="/header/mec/21Mat21">
                21Mat21
              </Link>
            </li>
            <li>
              <Link className="btn btn-primary mx-5 my-1" to="/header/mec/21PHY12">
                21PHY12
              </Link>
            </li>
            <li>
              <Link className="btn btn-primary mx-5 my-1" to="/header/mec/21ELE13">
                21ELE13
              </Link>
            </li>
            <li>
              <Link className="btn btn-primary mx-5 my-1" to="/header/mec/21CIV14">
                21CIV14
              </Link>
            </li>
            <li>
              {" "}
              <Link className="btn btn-primary mx-5 my-1" to="/header/mec/21EGDL25">
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
              <Link className="btn btn-primary mx-5 my-1" to="/header/mec/18MAT31">
                18MAT31
              </Link>
            </li>
            <li>
              <Link className="btn btn-primary mx-5 my-1" to="/header/mec/18ME32">
                18ME32
              </Link>
            </li>
            <li>
              <Link className="btn btn-primary mx-5 my-1" to="/header/mec/18ME33">
                18ME33
              </Link>
            </li>
            <li>
              <Link className="btn btn-primary mx-5 my-1" to="/header/mec/18ME34">
                18ME34
              </Link>
            </li>
            <li>
              {" "}
              <Link className="btn btn-primary mx-5 my-1" to="/header/mec/18ME35">
                18ME35
              </Link>
            </li>
            <li>
              {" "}
              <Link className="btn btn-primary mx-5 my-1" to="/header/mec/18ME36">
                18ME36
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
              <Link className="btn btn-primary mx-5 my-1" to="/header/mec/18MAT41">
                18MAT41
              </Link>
            </li>
            <li>
              <Link className="btn btn-primary mx-5 my-1" to="/header/mec/18ME42">
                18ME42
              </Link>
            </li>
            <li>
              <Link className="btn btn-primary mx-5 my-1" to="/header/mec/18ME43">
                18ME43
              </Link>
            </li>
            <li>
              <Link className="btn btn-primary mx-5 my-1" to="/header/mec/18ME44">
                18ME44
              </Link>
            </li>
            <li>
              {" "}
              <Link className="btn btn-primary mx-5 my-1" to="/header/mec/18ME45">
                18ME45
              </Link>
            </li>
            <li>
              {" "}
              <Link className="btn btn-primary mx-5 my-1" to="/header/mec/18ME46">
                18ME46
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
              <Link className="btn btn-primary mx-5 my-1" to="/header/mec/18ME51">
                18ME51
              </Link>
            </li>
            <li>
              <Link className="btn btn-primary mx-5 my-1" to="/header/mec/18ME52">
                18ME52
              </Link>
            </li>
            <li>
              <Link className="btn btn-primary mx-5 my-1" to="/header/mec/18ME53">
                18ME53
              </Link>
            </li>
            <li>
              <Link className="btn btn-primary mx-5 my-1" to="/header/mec/18ME54">
                18ME54
              </Link>
            </li>
            <li>
              {" "}
              <Link className="btn btn-primary mx-5 my-1" to="/header/mec/18ME55">
                18ME55
              </Link>
            </li>
            <li>
              {" "}
              <Link className="btn btn-primary mx-5 my-1" to="/header/mec/18ME56">
                18ME56
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
              <Link className="btn btn-primary mx-5 my-1" to="/header/mec/18ME61">
                18ME61
              </Link>
            </li>
            <li>
              <Link className="btn btn-primary mx-5 my-1" to="/header/mec/18ME62">
                18ME62
              </Link>
            </li>
            <li>
              <Link className="btn btn-primary mx-5 my-1" to="/header/mec/18ME63">
                18ME63
              </Link>
            </li>
            <li>
              <Link className="btn btn-primary mx-5 my-1" to="/header/mec/18ME64">
                18ME64
              </Link>
            </li>
            <li>
              {" "}
              <Link className="btn btn-primary mx-5 my-1" to="/header/mec/18ME65">
                18ME65
              </Link>
            </li>
            <li>
              {" "}
              <Link className="btn btn-primary mx-5 my-1" to="/header/mec/18ME66">
                18ME66
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
              <Link className="btn btn-primary mx-5 my-1" to="/header/mec/18ME71">
                18ME71
              </Link>
            </li>
            <li>
              <Link className="btn btn-primary mx-5 my-1" to="/header/mec/18ME72">
                18ME72
              </Link>
            </li>
            <li>
              <Link className="btn btn-primary mx-5 my-1" to="/header/mec/18ME73">
                18ME73
              </Link>
            </li>
            <li>
              <Link className="btn btn-primary mx-5 my-1" to="/header/mec/18ME74">
                18ME74
              </Link>
            </li>
            <li>
              {" "}
              <Link className="btn btn-primary mx-5 my-1" to="/header/mec/18ME75">
                18ME75
              </Link>
            </li>
            <li>
              {" "}
              <Link className="btn btn-primary mx-5 my-1" to="/header/mec/18ME76">
                18ME76
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
              <Link className="btn btn-primary mx-5 my-1" to="/header/mec/18ME81">
                18ME81
              </Link>
            </li>
            <li>
              <Link className="btn btn-primary mx-5 my-1" to="/header/mec/18ME82">
                18ME82
              </Link>
            </li>
            <li>
              <Link className="btn btn-primary mx-5 my-1" to="/header/mec/18ME83">
                18ME83
              </Link>
            </li>
            <li>
              <Link className="btn btn-primary mx-5 my-1" to="/header/mec/18ME84">
                18ME84
              </Link>
            </li>
            <li>
              {" "}
              <Link className="btn btn-primary mx-5 my-1" to="/header/mec/18ME85">
                18ME85
              </Link>
            </li>
            <li>
              {" "}
              <Link className="btn btn-primary mx-5 my-1" to="/header/mec/18ME86">
                18ME86
              </Link>
            </li>
          </ul>
        </div>
  
        <Outlet />
      </div>
    );
  }

export default Navbar4
