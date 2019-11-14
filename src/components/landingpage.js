/*
Landing page Last updated: 09/19/2019
This is the page the website goes to when first accessed.
Theres some things to note here
1) This thing detects the size of the window of the device using :
this.state = {
      width: window.innerWidth
    };
2) componentWillMount()
3)handleWindowSizeChange()

The Variable this this.state is updated everytime the window size is changed
to basically ammend for the initial issue I had of adjusting the fontAwesome Icons

Additionally, the effect for the site is set on first launch, it will either be
the the Net effect or the Waves effect from VantaJS. This is dependent on the windows
size.
*/

import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

import avatarPic from "../assets/ProfileHead.png";

class Landing extends Component {
  constructor() {
    super();
    this.siteVariable = "https://drive.google.com/file/d/1qPMgwq3ZCCj5W9h49eM1O7AHPpW51-jr/view"
    this.myRef = React.createRef();
    this.state = {
      width: window.innerWidth
    };
  }

  componentWillMount() {
    window.addEventListener("resize", this.handleWindowSizeChange);
  }

  handleWindowSizeChange = () => {
    this.setState({ width: window.innerWidth });
  };

  componentDidMount() {
    const { width } = this.state;
    const isMobile = width <= 700;
    if (!isMobile) {
      this.effect = window.VANTA.NET({
        el: "#net",
        color: 0x00ffff,
        backgroundColor: 0x3155ac,
        points: 8.0,
  maxDistance: 21.00,
  spacing: 18.00
      });
    } else {
      this.effect = window.VANTA.WAVES({
        el: "#net"
      });      
    }
  }

  renderIcons() {
    const { width } = this.state;
    const isMobile = width <= 700;
    if (isMobile)
      return (
        <div className="social-links-mobile" style={{ marginTop: "1.5%" }}>
          {console.log("Mobile View")}
          <a
            href="https://www.dropbox.com/s/3i262b2tke5h9lp/bsDegree.jpg?dl=0"
            rel="noopener noreferrer"
            target="_blank"
          >
            <i className="fas fa-graduation-cap" aria-hidden="true" />
          </a>
          <a
            href="https://www.linkedin.com/in/tylerhu89/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <i class="fab fa-linkedin"></i>
          </a>

          <a
            href="https://github.com/tylerhu3"
            rel="noopener noreferrer"
            target="_blank"
          >
            <i class="fab fa-github-alt"></i>
          </a>

        

          <a
          href="https://www.dropbox.com/s/xjpw0ljk33d4u0b/20190919%20Resume.docx?dl=0"
          alt="Resume"
          title="My Resume"
          rel="noopener noreferrer"
          target="_blank"
        >
          
          <i class="fas fa-paperclip"></i>
          </a>




        </div>
      );

    return (
      <div className="social-links" style={{ marginTop: "2.5%" }}>
        {console.log("Desktop View")}
        <a
        title="Diploma"
          href="https://www.dropbox.com/s/3i262b2tke5h9lp/bsDegree.jpg?dl=0"
          rel="noopener noreferrer"
          target="_blank"
        >
          <i className="fas fa-graduation-cap" aria-hidden="true" />
        </a>
        <a
        title="LinkedIn"
          href="https://www.linkedin.com/in/tylerhu89/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <i class="fab fa-linkedin"></i>
        </a>

        <a
        title="GitHub"
          href="https://github.com/tylerhu3"
          rel="noopener noreferrer"
          target="_blank"
        >
          <i class="fab fa-github-alt"></i>
        </a>

        <a
          href="https://www.dropbox.com/s/xjpw0ljk33d4u0b/20190919%20Resume.docx?dl=0"
          alt="Resume"
          title="My Resume"
          rel="noopener noreferrer"
          target="_blank"
        >
          
          <i class="fas fa-paperclip"></i>
        </a>
      </div>
    );
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleWindowSizeChange);
    if (this.effect) this.effect.destroy();
  }
  landingPageAbstracted() {
    return (
      <div style={{ width: "100%", margin: "auto" }}>
        <Grid className="landing-grid">
          <Cell
            style={{ marginTop: "4%", paddingTop: "0" }}
            phone={12}
            col={12}
          >
            <div className="banner-text">
              <div style={{ textAlign: "center" }}>
                <img
                  src={avatarPic}
                    alt="avatar"
                  className="avatar-img"
                />
                <p className="banner-text-p">Hello, I'm Tyler, a</p>
                <h2>SOFTWARE DEVELOPER</h2>
                <p className="banner-text-p">
                  who enjoys building Android and web apps.
                </p>
                <div>{this.renderIcons()}</div>
              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }

  render() {
    return (
      <div id="net" className="landingBG">
        {this.landingPageAbstracted()}
      </div>
    );
  }
}
export default Landing;
