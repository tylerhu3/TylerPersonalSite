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