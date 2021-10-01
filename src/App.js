import React, { Component } from "react";
import ReactGA from "react-ga";
import $ from "jquery";
import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import About from "./Components/About";
import Resume from "./Components/Resume";
import Contact from "./Components/Contact";
import Portfolio from "./Components/Portfolio";
import TechStack from "./Components/TechStack";
import ThreeTest from "./Components/ThreeTest";
import Loader from "./Components/Loader";
import { Fade } from "react-reveal";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      foo: "bar",
      resumeData: {}
    };

    ReactGA.initialize("UA-110570651-1");
    ReactGA.pageview(window.location.pathname);
  }

  getResumeData() {
    $.ajax({
      url: "./resumeData.json",
      dataType: "json",
      cache: false,
      success: function(data) {
        this.setState({ resumeData: data });
      }.bind(this),
      error: function(xhr, status, err) {
        console.log(err);
        alert(err);
      }
    });
  }

  componentDidMount() {
    this.getResumeData();
    setTimeout(function() {this.setState({render: true})}.bind(this), 3000) //Wait for Page to Load
  }

  render() {
    if(!this.state.render){
      return(
        <Loader/>
      )
    }
    return (
      <Fade duration={1000}>
      <div className="App">
        <Fade duration={1000}>
        <Header data={this.state.resumeData.main} />
        <About data={this.state.resumeData.main} />
        <Resume data={this.state.resumeData.resume} />
        <TechStack data={this.state.resumeData.portfolio} />
        <ThreeTest data={this.state.resumeData.portfolio}/>
        <Portfolio data={this.state.resumeData.portfolio} />
        <Contact data={this.state.resumeData.main} />
        <Footer data={this.state.resumeData.main} />
        </Fade>
      </div>
      </Fade>
    );
  }
}

export default App;
