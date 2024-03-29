import React, { Component } from "react";
import Fade from "react-reveal";
import HexGridBackground from './HexGridBackground';
import { LazyLoadImage } from 'react-lazy-load-image-component';

let id = 0;
class Portfolio extends Component {
  render() {
    if (!this.props.data) return null;

    const projects = this.props.data.projects.map(function (projects) {
      let projectImage = "images/portfolio/" + projects.image;

      return (
        <div key={id++} className="columns portfolio-item">
          <div className="item-wrap container">
            <LazyLoadImage alt={projects.title}  height={200} src={projectImage}/>
            <a href={projects.url}> {projects.title}</a>
            <p>{projects.category}</p>
            <p>{projects.description}</p>
          </div>
        </div>
        
      );
    });

    return (
      
      <section id="portfolio">
        <HexGridBackground/>
        <Fade distance="40px">
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
