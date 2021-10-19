import React, { Component } from 'react'
import Fade from "react-reveal";

let id = 0;
class TechStack extends Component {
  render() {
    if (!this.props.data) return null;

    const techStack = this.props.data.techStack.map(function (techStack) {
      let techStackImage = "images/techStack/" + techStack.image;

      return (
        <div className="flip-card columns" key={id++}>
          <div className="flip-card-inner item-wrap container">
            <div className="flip-card-front">
              <img src={techStackImage} alt={techStack.title} />
            </div>
            <div className="flip-card-back">
              <h3 href={techStack.url}> {techStack.title}</h3>
            </div>
          </div>
        </div>
        
      );
    });

    return (
      <section id="techStack">
        <Fade left duration={1000} distance="40px">
          <div>
            <div>
              <h1>Technologies Worked with</h1>
                <div id="techStack-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
                  {techStack}
                </div>
            </div>
          </div>
        </Fade>
      </section>
    );
  }
}

export default TechStack;
