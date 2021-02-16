import React from 'react';
import { Link } from 'react-router-dom';
import './Main.js';

function Thumbnail(props) {
  return (
    <div className="project">
      <Link to={props.link}>
        <div className="content">
          <img src={props.image} alt="Visual"/>
        </div>
        <div className="project-title">{props.title}</div>
        <div className="project-category">{props.category}</div>
      </Link>
    </div>
  );
}

export default Thumbnail;
