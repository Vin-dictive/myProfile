import React, { Component } from "react";
import Slide from "react-reveal";
import ComponentWithDimensions from "./ComponentWithDimensions";

class Resume extends Component {
  
  render() {
    if (!this.props.data) return null;
    const skillmessage = this.props.data.skillmessage;
    const education = this.props.data.education.map(function (education) {
      return (
        <div key={education.school}>
          <h3>{education.school}</h3>
          <p className="info">
            {education.degree} <span>&bull;</span>
            <em className="date">{education.graduated}</em>
          </p>
          <p>{education.description}</p>
          <br></br>
        </div>
      );
    });

    const work = this.props.data.experience.map(function (work) {
      return (
        <div key={work.company}>
          <h3>{work.company}</h3>
          <p className="info">
            {work.title}
            <span>&bull;</span> <em className="date">{work.years}</em>
          </p>
          <p>{work.description}</p>
          <br></br>
        </div>
      );
    });

    const skills = this.props.data.skills.map((skills) => {
      return (
          <a key={skills.name} href="#resume" className="button skills-btn">
            {skills.name}
          </a>
      );
    });

    return (
      <section id="resume">  
        <ComponentWithDimensions/>
        <Slide left duration={1300}>
          <div className="row work">
            <div className="three columns header-col">
              <h1>
                <span>Experience</span>
              </h1>
            </div>

            <div className="nine columns main-col">{work}</div>
          </div>
        </Slide>
        
        <Slide left duration={1300}>
          <div className="row education">
            <div className="three columns header-col">
              <h1>
                <span>Education</span>
              </h1>
            </div>

            <div className="nine columns main-col">
              <div className="row item">
                <div className="twelve columns">{education}</div>
              </div>
            </div>
          </div>
        </Slide>

        <Slide left duration={1300}>
          <div className="row skill">
            <div className="three columns header-col">
              <h1>
                <span>Core Skills</span>
              </h1>
            </div>

            <div className="nine columns main-col">
              <p>{skillmessage}</p>
                <ul className="social">
                  {skills}
                </ul>
            </div>
          </div>
        </Slide>
      </section>
    );
  }
}

export default Resume;
