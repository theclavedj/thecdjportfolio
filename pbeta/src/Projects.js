import React, { Component } from "react";
import Thumbnail from './Thumbnail.js';
import dc from './dentalcard.png';
import mg from './Capture.png';
import ag from './arcadegame.png'

class Projects extends Component {
  render() {
    return (
      <div>
        <h2 style={{textAlign: "center"}}>PROJECTS and SKILLS</h2>
        <div style={{display: "flex", align: "center", textAlign: "center", fontFamily: "Josefin Sans", flexWrap: "wrap"}}>
        <Thumbnail
        link="Project01"
        image={mg}
        title="Memory Game"
        category="Javascript, CSS, HTML"
        />
        <Thumbnail
        link="Project02"
        image={ag}
        title="Arcade Game"
        category="Javascript, CSS, HTML"
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
        title="Rendered skin"
        category="Photoshop, 3DSMax"
        />
        <Thumbnail
        link="Project05"
        image="https://raw.githubusercontent.com/theclavedj/portfolio-Site/master/images/IMG_9096.JPG"
        title="Radio Logo"
        category="Photoshop, Illustrator"
        />
        <Thumbnail
        link="Project06"
        image="https://raw.githubusercontent.com/theclavedj/portfolio-Site/master/images/apocalipsis.jpg"
        title="Apocalipsis (unfinished)"
        category="Photoshop"
        />
        <Thumbnail
        link="Project07"
        image="https://raw.githubusercontent.com/theclavedj/portfolio-Site/master/images/intro-coleccion-eltrono.jpg"
        title="Skins collection"
        category="Photoshop, 3DSMax"
        />
        <Thumbnail
        link="Project08"
        image={dc}
        title="Dentist Logo"
        category="Illustrator"
        />
        <Thumbnail
        link="Project09"
        image="https://raw.githubusercontent.com/theclavedj/portfolio-Site/master/images/thumbnail-tendaf303.jpg"
        title="Tenda Youtube Thumbnail"
        category="Photoshop"
        />
        <Thumbnail
        link="Project10"
        image="https://raw.githubusercontent.com/theclavedj/portfolio-Site/master/images/DULAPcompartimentat2usa.jpg"
        title="Apartment recreation for remodelation"
        category="3DSMax"
        />
        <Thumbnail
        link="Project11"
        image="https://raw.githubusercontent.com/theclavedj/portfolio-Site/master/images/proyecto-thelobster-posterFINALmod4.jpg"
        title="Promotional Poster"
        category="Illustrator"
        />
        </div>
      </div>
    );
  }
}

export default Projects;
