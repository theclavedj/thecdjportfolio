import React, { Component } from "react";
import Thumbnail from './Thumbnail.js';

class Projects extends Component {
  render() {
    return (
      <div>
        <h2>PROJECTS and SKILLS</h2>
        <Thumbnail
        link="Project01"
        image="https://raw.githubusercontent.com/theclavedj/portfolio-Site/master/images/thumbnail-tendaf303.jpg"
        title="Tenda Youtube Thumbnail"
        category="Photoshop"
        />
        <Thumbnail
        link="Project02"
        image="https://raw.githubusercontent.com/theclavedj/portfolio-Site/master/images/DULAPcompartimentat2usa.jpg"
        title="Apartment recreation for remodelation"
        category="3DSMax"
        />
        <Thumbnail
        link="Project03"
        image="https://raw.githubusercontent.com/theclavedj/portfolio-Site/master/images/proyecto-thelobster-posterFINALmod4.jpg"
        title="Promotional Poster"
        category="Illustrator"
        />
        <Thumbnail
        link="Project04"
        image="https://raw.githubusercontent.com/theclavedj/portfolio-Site/master/images/tec-csgo-fotosop2.jpg"
        title="Rendered skin over in-game screenshot"
        category="Photoshop, 3DSMax"
        />
      </div>
    );
  }
}

export default Projects;
