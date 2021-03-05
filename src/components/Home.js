import React, { Component } from "react";
import Skills from "./Skills";
import Publications from "./Publications";
import About from "./About";

export default class Home extends Component {
  render() {
    return (
      <div className="row custom_pad">
        <div className="col-md-12">
          {/* About */}
          <About />

          {/* Publications */}
          <Publications />

          {/* Skills */}
          <Skills />
        </div>
      </div>
    );
  }
}
