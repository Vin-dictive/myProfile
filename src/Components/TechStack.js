import React, { Component } from 'react'
import Fade from "react-reveal";

let id = 0;
class TechStack extends Component {
  render() {
    if (!this.props.data) return null;

    const techStack = this.props.data.techStack.map(function (techStack) {
      let techStackImage = "images/techStack/" + techStack.image;

      return (
        <div class="flip-card columns" key={id++}>
          <div class="flip-card-inner item-wrap container">
            <div class="flip-card-front">
              <img src={techStackImage} alt={techStack.title} />
            </div>
            <div class="flip-card-back">
              <a href={techStack.url}> {techStack.title}</a>
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
