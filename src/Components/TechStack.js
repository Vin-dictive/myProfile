import React, { Component } from "react";
import Zmage from "react-zmage";
import Fade from "react-reveal";

let id = 0;
class TechStack extends Component {
  render() {
    if (!this.props.data) return null;

    const techStack = this.props.data.techStack.map(function (techStack) {
      let techStackImage = "images/portfolio/" + techStack.image;

      return (
        <div key={id++} className="columns portfolio-item">
          <div className="item-wrap container">
            <Zmage alt={techStack.title} src={techStackImage} width={500} height={500}/>
            <a href={techStack.url}> {techStack.title}</a>
            <p>{techStack.category}</p>
            <p>{techStack.description}</p>
          </div>
        </div>
        
      );
    });

    return (
      <section id="techStack">
        <Fade left duration={1000} distance="40px">
          <div>
            <div>
              <h1>Check out some of my techStack</h1>
                <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
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
