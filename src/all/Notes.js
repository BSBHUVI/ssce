import React from 'react'


import './App.css'

function Notes(props) {
    return (
      <div className="Notes">
        <h1>{props.title}</h1>
        
        
        
        <br />
        <br />
        <div className="Notes">
          <h1>Notes</h1>
          <hr />
          <h1>module 1 - {props.name1}</h1>
          <a className="btn btn-danger" href={props.link1} >
            pdf-{props.name1}
          </a>
          <hr />
          <h1>module 2 - {props.name2}</h1>
          <a className="btn btn-danger" href={props.link2} >
            pdf-{props.name2}
          </a>
          <hr />
          <h1>module 3 - {props.name3}</h1>
          <a className="btn btn-danger" href={props.link3} >
            pdf-{props.name3}
          </a>
          <hr />
          <h1>module 4 - {props.name4}</h1>
          <a className="btn btn-danger" href={props.link4} >
            pdf-{props.name4}
          </a>
          <hr />
          <h1>module 5 - {props.name5}</h1>
          <a className="btn btn-danger" href={props.link5} >
            pdf-{props.name5}
          </a>
          <hr />
        </div>
      </div>
    );
  }
  

export default Notes
