import React, { Component } from "react";
import avatarPic from "../assets/ProfileHead.png";
class About extends Component {
  constructor() {
    super();
    this.state = {
      width: window.innerWidth
    };
  }

  UNSAFE_componentWillMount() {
    window.addEventListener("resize", this.handleWindowSizeChange);
  }

  handleWindowSizeChange = () => {
    this.setState({ width: window.innerWidth });
  };

  aboutMeAbstracted() {
    return (
      <div>
        <div className="about2ndDiv">
          <div
            className="mdl-shadow--4dp  mdl-color--white "
            style={{ marginTop: "5%", position: "relative", zIndex: 1 }}
          >
            <div style={{ textAlign: "center", margin: "10px" }}>
              <img
                src={avatarPic}
                alt="avatar"
                style={{ marginTop: "20px ", height: "200px" }}
              />
            </div>
            <div className="innerAboutMe" style={{ margin: "10px" }}>
              <h3 style={{ margin: "10px", textAlign: "center" }}>
                About Me:            </h3>
              <br></br>
              <p>
                Prior to earning my degree in Computer Science from the University of California, Santa Cruz, I had the honor of serving in the United States Air Force from 2007 to 2014. My time in the military instilled in me a deep sense of discipline and adaptability, qualities that I now bring to my career in software engineering.
                <br /><br />
                Outside of the tech world, I am an avid dancer with a passion for bachata, West Coast swing, and salsa. You'll often find me enjoying a great cup of coffee with friends or taking a leisurely walk to appreciate the outdoors. I also enjoy playing StarCraft, a complex strategy game that keeps my analytical skills sharp. While it's been a while since I've hit the slopes snowboarding and I will go with anyone that invites me, and skydiving is currently at the top of my bucket list.
                <br /><br />
                Thank you for visiting my portfolio. If you are looking for a dedicated and passionate software engineer, please don't hesitate to reach out.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  aboutMeAbstractedMobile() {
    return (
      <div>
        <div className="about2ndDiv">
          <div
            className="mdl-shadow--4dp  mdl-color--white "
            style={{ marginTop: "18%", position: "relative", zIndex: 1 }}
          >
            <div style={{ textAlign: "center", margin: "10px" }}>
              <img
                src="https://lh3.googleusercontent.com/pf3dPcWyfAkl20Ftzq0Fqr_SI069iPxafl0zq8LNnOxDxZxiOXSBsEpbodIltEIGLavSXT82BzHwokn1T7SL3BxUXMFJJZ0qNJ8gJOYti-K9VCDSL0a8op2I8QgC62V42JTr1YIXseZL5IYNfkL64EM0FxNbYSbmzVlBpoU99iiLobenVpYO1UfB-TY2-giOz3-El40FJKjcCQiWz4HkLB4viC3sv6Wd9eEXFRyPbDGu2G6p2yosFZBtuN1Kl6JHREl0sKpXxUmROxM4XuwGuhJGGJLkfaXVUraue3tKe04BDbwKnWKv0cA4V9GplcErfCkytKZs_ITQ9scWBj5zQbFEIvKThsh-JsmUYM18__4eZ7zm7CTBCgNirCHLFvPAGK_goT8FZjyfnGpXpaq2wNjOrDxanyu3skJhLfRnK9xRijQllV87vkaujA7pHO72Nggr_MuFhiuFrmaSswpmDiQr1FZAtb8YYHnaI42-s0Hr2NI8kuizzM8DRPmHzn7qVNj7Qb_bHVoQLz2Fh3cs3Q1GByQBlip8LAL1sUxB3w13wrDRuQxT3bpsJytfO9PPzGBHYuthVFhc8AQWv-w1iuj12czYZ_M2n4nEsQ8HMHCAI2ErW9RssQLsIV__5aQqxHjJxZ2x5Kpw-aw53rJ6ax1eempZudkEFWul1UpJMV4gLBLaB8e_-Ahh=s387-no"
                alt="avatar"
                style={{ marginTop: "20px ", height: "200px" }}
              />
            </div>
            <div className="innerAboutMe" style={{ margin: "10px" }}>
              <h3 style={{ margin: "10px", textAlign: "center" }}>
                Interesting things about me...
              </h3>
              <br></br>
              <p>
                Prior to earning my degree in Computer Science from the University of California, Santa Cruz, I had the honor of serving in the United States Air Force from 2007 to 2014. My time in the military instilled in me a deep sense of discipline and adaptability, qualities that I now bring to my career in software engineering.
                <br /><br />
                Outside of the tech world, I am an avid dancer with a passion for bachata, West Coast swing, and salsa. You'll often find me enjoying a great cup of coffee with friends or taking a leisurely walk to appreciate the outdoors. I also enjoy playing StarCraft, a complex strategy game that keeps my analytical skills sharp. While it's been a while since I've hit the slopes or the skatepark, snowboarding and skateboarding remain close to my heart, and skydiving is currently at the top of my bucket list.
                <br /><br />
                Thank you for visiting my portfolio. If you are looking for a dedicated and passionate software engineer, please don't hesitate to reach out.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  render() {
    const { width } = this.state;
    const isMobile = width <= 700;

    const bouncingStyles = `
      @keyframes bounceX {
        0%, 100% { left: 0; }
        50% { left: calc(100vw - 150px); }
      }
      @keyframes bounceY {
        0%, 100% { top: 0; }
        50% { top: calc(100vh - 150px); }
      }
      
      .bouncing-img {
        position: fixed;
        width: 150px;
        height: 150px;
        object-fit: cover;
        border-radius: 10px;
        z-index: 0;
        opacity: 1;
        pointer-events: none;
        box-shadow: 0 4px 8px rgba(0,0,0,0.3);
      }

      .img-1 {
        animation: bounceX 13s linear infinite, bounceY 11s linear infinite;
      }
      .img-2 {
        animation: bounceX 17s linear infinite, bounceY 14s linear infinite;
        animation-delay: -5s, -3s;
      }
      .img-3 {
        animation: bounceX 19s linear infinite, bounceY 15s linear infinite;
        animation-delay: -9s, -7s;
      }
      .img-4 {
        animation: bounceX 11s linear infinite, bounceY 13s linear infinite;
        animation-delay: -2s, -8s;
      }
      .img-5 {
        animation: bounceX 15s linear infinite, bounceY 17s linear infinite;
        animation-delay: -6s, -1s;
      }
      .img-6 {
        animation: bounceX 14s linear infinite, bounceY 19s linear infinite;
        animation-delay: -4s, -5s;
      }
    `;

    const backgroundImages = (
      <>
        <style>{bouncingStyles}</style>
        {/* <img src={process.env.PUBLIC_URL + '/salsaPic.webp'} className="bouncing-img img-1" alt="Salsa" />
        <img src={process.env.PUBLIC_URL + '/b1Pic.jfif'} className="bouncing-img img-2" alt="B1" />
        <img src={process.env.PUBLIC_URL + '/snowBoardPic.webp'} className="bouncing-img img-3" alt="Snowboard" />
        <img src={process.env.PUBLIC_URL + '/salsaPic.webp'} className="bouncing-img img-4" alt="Salsa" />
        <img src={process.env.PUBLIC_URL + '/b1Pic.jfif'} className="bouncing-img img-5" alt="B1" />
        <img src={process.env.PUBLIC_URL + '/snowBoardPic.webp'} className="bouncing-img img-6" alt="Snowboard" /> */}
      </>
    );

    if (!isMobile)
      return (<div className="about1stDiv" >
        {backgroundImages}
        {this.aboutMeAbstracted()}
      </div>);

    return (<div style={{ background: "#4286f4", minHeight: "100vh" }}  >
      {backgroundImages}
      {this.aboutMeAbstractedMobile()}
    </div>);
  }

}
export default About;
