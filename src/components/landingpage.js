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
class Landing extends Component {
  constructor() {
    super();
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
        points: 6.0,
        maxDistance: 18.0
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
            href="https://lh3.googleusercontent.com/O-sQA7I5Kz5jml5rbYz9TJ0WGMiy7doRXgtsXLiC4DyMLcgyuQxC9aFsGGLds54eFPuYAJGvOScgnH0zo3lpialP2FjztL82aQjuyJVoWFQP9IX0rFOgKgBH63lAPgPrCUIcfITYQ9qIkCMZ3drq35zl52-YbWF5a05FuIhuU2L07HLcvh-kJqzj3Q-12qNuDsXKL8dHgdOOiGgHpXwgMN12inXUePE1tGdXcDUgvNN8jCdurC0rArpw58a0oIC6xd8FX5OCfHmNdXY7qbT0ZQF0VZ-Ls1XG3A7_F4arE7Ij-cFRWrZYmCD0880tsntYo4l_HigDHrahEmTH9GEfY8zFE9VlQwBnsCMA4s1TWAR902A5oc-FzNjfH5j4a2LRlehHfL09F6VIkPrTVAB8_KDSv8ME2XUv9NL75kw6jqPCemsVWFB5jVBmythw0zkmeM2Ct7RREPGbgXfUbbEA5AF9j7Uru_H3KXtttJ1GHGku1sNXeluegHcqOMHZwOcDKaDqDO8aAW0v_cQX_Bzdwz-IOCxhPsWfft4ZYsTl1Rg9QZV6Z9rFw6hUAuknmbH5iF9Wx0k0USRyt6GTXlb-DbE1re2jXqqFgFzkfmvws--cgZQPYDiUjCeB4d2ds0ClUhcjCPWBiCVBQghyi5KDa2wkKbuHuw_NGaJtn1vSY8EXkL5wzMWhhkW0=w2316-h1736-no"
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
            href="http://Starbucks.com"
            alt="Coffee Addict"
            rel="noopener noreferrer"
            target="_blank"
          >
            <i class="fas fa-coffee"></i>
          </a>
        </div>
      );

    return (
      <div className="social-links" style={{ marginTop: "2.5%" }}>
        {console.log("Desktop View")}
        <a
          href="https://lh3.googleusercontent.com/O-sQA7I5Kz5jml5rbYz9TJ0WGMiy7doRXgtsXLiC4DyMLcgyuQxC9aFsGGLds54eFPuYAJGvOScgnH0zo3lpialP2FjztL82aQjuyJVoWFQP9IX0rFOgKgBH63lAPgPrCUIcfITYQ9qIkCMZ3drq35zl52-YbWF5a05FuIhuU2L07HLcvh-kJqzj3Q-12qNuDsXKL8dHgdOOiGgHpXwgMN12inXUePE1tGdXcDUgvNN8jCdurC0rArpw58a0oIC6xd8FX5OCfHmNdXY7qbT0ZQF0VZ-Ls1XG3A7_F4arE7Ij-cFRWrZYmCD0880tsntYo4l_HigDHrahEmTH9GEfY8zFE9VlQwBnsCMA4s1TWAR902A5oc-FzNjfH5j4a2LRlehHfL09F6VIkPrTVAB8_KDSv8ME2XUv9NL75kw6jqPCemsVWFB5jVBmythw0zkmeM2Ct7RREPGbgXfUbbEA5AF9j7Uru_H3KXtttJ1GHGku1sNXeluegHcqOMHZwOcDKaDqDO8aAW0v_cQX_Bzdwz-IOCxhPsWfft4ZYsTl1Rg9QZV6Z9rFw6hUAuknmbH5iF9Wx0k0USRyt6GTXlb-DbE1re2jXqqFgFzkfmvws--cgZQPYDiUjCeB4d2ds0ClUhcjCPWBiCVBQghyi5KDa2wkKbuHuw_NGaJtn1vSY8EXkL5wzMWhhkW0=w2316-h1736-no"
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
          href="http://Starbucks.com"
          alt="Coffee Addict"
          rel="noopener noreferrer"
          target="_blank"
        >
          <i class="fas fa-coffee"></i>
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
                  src="https://cdn1.iconfinder.com/data/icons/people-49/512/_nerd_man-512.png"
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
