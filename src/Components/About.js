import React, { Component } from 'react';
import Fade from 'react-reveal';

class About extends Component {
  render() {
    if (!this.props.data) return null;

    const { name } = this.props.data;
    const profilepic = `images/${this.props.data.image}`;
    const { bio } = this.props.data;
    const { street } = this.props.data.address;
    const { city } = this.props.data.address;
    const { state } = this.props.data.address;
    const { zip } = this.props.data.address;
    const { phone } = this.props.data;
    const { email } = this.props.data;

    return (
      <section id="about">
        <Fade duration={1000}>
          <div className="row work">
            <div className="three columns header-col">
              <img
                className="profile-pic"
                src={profilepic}
                alt="Nordic Giant Profile Pic"
              />
            </div>
            <div className="nine columns main-col">
              <h2>About Me</h2>

              <p>{bio}</p>
              <div className="row">
                <div className="columns contact-details">
                  <br />
                  <h2>Contact Details</h2>
                  <p className="address">
                    <span>{name}</span>
                    <br />
                    <span>
                      {street}
                      <br />
                      {city}
                      {' '}
                      {state}
                      ,
                      {' '}
                      {zip}
                    </span>
                    <br />
                    <span>{phone}</span>
                    <br />
                    <span>{email}</span>
                  </p>
                </div>
                <div className="columns download" />
              </div>
            </div>
          </div>
        </Fade>
      </section>
    );
  }
}

export default About;
