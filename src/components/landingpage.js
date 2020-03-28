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
import NET from "vanta/dist/vanta.net.min";
import WAVES from "vanta/dist/vanta.waves.min";

import avatarPic from "../assets/ProfileHead.png";

class Landing extends Component {
  constructor() {
    super();
    this.vantaRef = React.createRef(); //for animated background
    this.state = {
      width: window.innerWidth
    };
  }

  componentDidMount() {
    window.addEventListener("resize", this.handleWindowSizeChange);
    const { width } = this.state;
    const isMobile = width <= 700;
    if (!isMobile) {
      this.vantaEffect = NET({
        el: this.vantaRef.current,
        color: 0x00ffff,
        backgroundColor: 0x3155ac,
        points: 8.0,
        maxDistance: 21.0,
        spacing: 18.0
      });
    } else {
      this.vantaEffect = WAVES({
        el: this.vantaRef.current,
      });
    }
  }
  handleWindowSizeChange = () => {
    this.setState({ width: window.innerWidth });
  };

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
            href="https://www.dropbox.com/s/i0e7g2fk00bqdcs/Tyler_Hu_Resume3.docx?dl=0"
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
    if (this.vantaEffect) this.vantaEffect.destroy();
    window.removeEventListener("resize", this.handleWindowSizeChange);
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
                <img src={avatarPic} alt="avatar" className="avatar-img" />
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
      <div ref={this.vantaRef} className="landingBG">
        {this.landingPageAbstracted()}
      </div>
    );
  }
}
export default Landing;
