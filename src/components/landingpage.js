import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
class Landing extends Component {
  constructor() {
    super();
    this.myRef = React.createRef();
  }
  componentDidMount() {
    this.effect = window.VANTA.NET({
      el: "#net",
      color: 0xffffff,
      backgroundColor: 0x3155ac,
      points: 7.0,
      maxDistance: 25.0
    });
  }
  componentWillUnmount() {
    if (this.effect) this.effect.destroy();
  }
  render() {
    return (
      <div id="net" className="landingBG">
      <div  style={{ width: "100%", margin: "auto" }}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src="https://cdn1.iconfinder.com/data/icons/people-49/512/_nerd_man-512.png"
              alt="avatar"
              className="avatar-img"
            />
            <div className="banner-text">
              <h1> Software Developer</h1>
              <hr></hr>
              <p>Android | Python | NodeJS | Express | MySQL | MongoDB | C++</p>
              <div className="social-links">
                <a
                  href="http://google.com"
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
                  href="https://www.freecodecamp.org/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i class="fab fa-free-code-camp"></i>
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
            </div>
          </Cell>
        </Grid>
      </div>
      </div>
    );
  }
}
export default Landing;
