import React from 'react';
import { Link } from 'react-router-dom';
import './Main.js';

function Thumbnail(props) {
  return (
    <div className="project">
      <Link to={props.link}>
        <div className="content" style={{display: "flex", align: "center", textAlign: "center"}}>
          <img style={{maxHeight: 200, maxWidth: 200}} src={props.image} alt="Visual"/>
        </div>
        <div className="project-title" style={{padding: "5px"}}>{props.title}</div>
        <div className="project-category" style={{padding: "5px"}}>{props.category}</div>
      </Link>
    </div>
  );
}

export default Thumbnail;
