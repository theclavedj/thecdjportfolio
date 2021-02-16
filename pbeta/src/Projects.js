import React, { Component } from "react";
import Thumbnail from './Thumbnail.js';

class Projects extends Component {
  render() {
    return (
      <div>
        <h2>PROJECTS</h2>
        <Thumbnail
        link="local"
        image="./images/thumbnail-tendaf303.jpg"
        content="./images/thumbnail-tendaf303.jpg"
        title="Tenda Youtube Thumbnail"
        category="Photoshop"
        />
        <Thumbnail
        link="local"
        image="./images/DULAPcompartimentat2usa.jpg"
        title="Apartment recreation for remodelation"
        category="3DSMax"
        />
      </div>
    );
  }
}

export default Projects;
