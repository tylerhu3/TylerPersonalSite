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
          style={{ marginTop: "5%" }}
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
              Before I got my Computer Science Degree from UC Santa Cruz, I
              served in the US Air Force. I was in from 2007 to 2014 when I
              enlistment was expired. On my off days, I typically like to enjoy
              a cup of coffee with a friend or go for nice easy paced walks to
              enjoy the weather. As for hobbies, I play StarCraft, which if you
              might not know is a popular strategy game made by Blizzard. I also enjoy snowboarding and skateboarding even
              though I haven't done either of those for a long time. And one
              thing I been meaning to cross off my bucketlist is skydiving.
              Regardless I hope you enjoyed your stay on this site and feel free
              to contact me if you need a software developer.
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
          style={{ marginTop: "18%" }}
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
              Before I got my Computer Science Degree from UC Santa Cruz, I
              served in the US Air Force. I was in from 2007 to 2014 when I
              enlistment was expired. On my off days, I typically like to enjoy
              a cup of coffee with a friend or go for nice easy paced walks to
              enjoy the weather. As for hobbies, I play StarCraft, which if you
              might not know is a popular strategy game made by Blizzard. 
              I hope you enjoyed your stay on this site and feel free
              to contact me if you need a software developer.
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
    if(!isMobile)
    return (<div className="about1stDiv" >
      {this.aboutMeAbstracted()}

    </div>);
  
    return (<div style={{background:"#4286f4"}}  >
      {this.aboutMeAbstractedMobile()}

    </div>);
  }
    
}
export default About;
