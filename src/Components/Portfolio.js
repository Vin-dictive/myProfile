import React, { Component } from "react";
import Fade from "react-reveal";
import ComponentWithDimensions from './ComponentWithDimensions';

let id = 0;
class Portfolio extends Component {
  render() {
    if (!this.props.data) return null;

    const projects = this.props.data.projects.map(function (projects) {
      let projectImage = "images/portfolio/" + projects.image;

      return (
        <div key={id++} className="columns portfolio-item">
          <div className="item-wrap container">
            <img alt={projects.title} src={projectImage} width={500} height={500}/>
            <a href={projects.url}> {projects.title}</a>
            <p>{projects.category}</p>
            <p>{projects.description}</p>
          </div>
        </div>
        
      );
    });

    return (
      <section id="portfolio">
        <ComponentWithDimensions/>
        <Fade left duration={1000} distance="40px">
          <div className="pointerEventRemover">
            <h1>Check out some of my Projects</h1>
              <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
                {projects}
              </div>
          </div>
        </Fade>
      </section>
    );
  }
}

export default Portfolio;
