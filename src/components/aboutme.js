import React, { Component } from "react";

class About extends Component {
  
  render() {
    return (
      <div className="about1stDiv"
      >
        <div className="about2ndDiv">

          <div
            className="mdl-shadow--4dp  mdl-color--white "
            style={{ marginTop:"10px"}}
          >
            <div style={{ textAlign: "center", margin: "10px"}}>
              <img
                src="https://cdn1.iconfinder.com/data/icons/people-49/512/_nerd_man-512.png"
                alt="avatar"
                style={{ marginTop: "20px ", height: "200px" }}
              />
            </div>
            <div className="innerAboutMe" style={{ margin: "10px"}}>
              <h3 style={{ margin: "10px", textAlign: "center" }}>
                Interesting things about me...
              </h3>
              <br></br>
              <p>
                Before I got my Computer Science Degree from UC Santa Cruz, I
                served in the US Air Force. I was in from 2007 to 2014 when I
                enlistment was expired. While in service, I gain a lot
                of valuable experience. Not only did I get the chance to serve
                my country but I also had the opportunity to travel and work in
                many different countries where I met people from all walks of
                life. And I think one of the greatest joys of life is enjoying a
                facinating conversation with a stranger and I feel you can learn
                some many things from just sincerely trying to get to know
                someone.
              </p>
              <p>
                On my off days, I typically like to enjoy a cup of coffee with a
                friend or go for nice easy paced walks to enjoy the weather. As
                for hobbies, I play StarCraft, which if you might not know is a
                strategy game made by Blizzard. Other than that, I watch animes
                here and there, a favorite of mines is Samurai Champloo. I also
                enjoy snowboarding and skateboarding even though I haven't done
                either of those for a long time. And one thing I been meaning to
                cross off my bucketlist is skydiving.
              </p>
              <p>
                I decided to my a major in Computer Science after my first
                quarter in Chabot Community College. I found that coding was
                kind of fun and it seem to be a booming field so I jumped in.
                However, I think it's not fun to code for the sake of coding, I
                think the fun part is when I apply my creativity to build
                something which is why I have random projects from GitHub.
              </p>
              <p>
                Regardless I hope you enjoyed your stay on this site and feel free to contact
                me if you need a software developer.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default About;
