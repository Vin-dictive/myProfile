import React, { Component } from 'react';
import ReactGA from 'react-ga';
import $ from 'jquery';
import './App.css';
import Loader from 'react-loader-spinner';
import Header from './Components/Header';
import Footer from './Components/Footer';
import About from './Components/About';
import Resume from './Components/Resume';
import Contact from './Components/Contact';
import Portfolio from './Components/Portfolio';
import TechStack from './Components/TechStack';
import ThreeTest from './Components/ThreeTest';
import HexGridBackground from './Components/HexGridBackground';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      foo: 'bar',
      resumeData: {},
    };
    ReactGA.initialize('UA-110570651-1');
    ReactGA.pageview(window.location.pathname);
  }

  getResumeData() {
    $.ajax({
      url: './resumeData.json',
      dataType: 'json',
      cache: false,
      success: function (data) {
        this.setState({ resumeData: data });
        this.setState({ loading: false });
      }.bind(this),
      error(xhr, status, err) {
        console.log(err);
        alert(err);
      },
    });
  }

  componentDidMount() {
    this.getResumeData();
  }

  render() {
    while (this.state.loading) {
      return (
        <div>
          <div className="loadingToCenter">
            <Loader
              type="Rings"
              color="#00BFFF"
              height={100}
              width={100}
            />
          </div>
        </div>
      );
    }

    return (
      <div className="App">
        <Header data={this.state.resumeData.main} />
        <About data={this.state.resumeData.main} />
        <Resume data={this.state.resumeData.resume} />
        <TechStack data={this.state.resumeData.portfolio} />
        <ThreeTest data={this.state.resumeData.portfolio} />
        <Portfolio data={this.state.resumeData.portfolio} />
        <Contact data={this.state.resumeData.main} />
        <Footer data={this.state.resumeData.main} />
        <HexGridBackground />
      </div>
    );
  }
}

export default App;
