import React, { Component } from "react";
import {
  Tabs,
  Tab,
  Grid,
  Cell,
  CardText,
  Card,
  CardTitle,
  CardActions,
  Button,
  CardMenu,
  IconButton
} from "react-mdl";
//The below imports picture directly from local host
// import playerPic from '../assets/audioplayer.jpg';

import websitePic from "../assets/profile.jpg";
import blogPic from "../assets/blog.jpg";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.Ref = React.createRef();

    this.state = { activeTab: 0 };
  }
  componentDidMount() {
    this.effect = window.VANTA.NET({
      el: "#netforProjects",
      color: 0xffffff,
      backgroundColor: 0x3155ac,
      points: 7.0,
      maxDistance: 25.0
    });
  }
  componentWillUnmount() {
    if (this.effect) this.effect.destroy();
  }

  toggleCategories() {
    var n = this.state.activeTab;

    switch (n) {
      case 0:
        return (
          <div
            style={{ paddingTop: "2%", fontFamily: "Oxygen" }}
            className="projects-grid"
          >
            <Card shadow={10} style={{ minWidth: "450", margin: "auto" }}>
              {/* The below uses the pictures in local folder rather than url */}
              {/* <img alt="test" style={{width: "100%", height:"90%", background: "center / cover"}} src={playerPic}></img> */}
              <CardTitle
                style={{
                  textShadow: "2px 2px 4px #ffffff",
                  color: "#0",
                  height: "250px",
                  background:
                    "url(https://st.depositphotos.com/1001959/4574/i/950/depositphotos_45741029-stock-photo-to-do-list.jpg) center / cover"
                }}
              >
                TODO List Widget
              </CardTitle>
              <CardText>
                Simple TODO List Widget made for the Android 6 and below. It's
                resizable and items are saved to a json file. Future plans: plan
                to fixe for Android 6 and above.
              </CardText>
              <CardActions border>
                <Button
                  href="https://github.com/tylerhu3/TODOWidget"
                  target="_blank"
                  colored
                >
                  GitHub
                </Button>
                <Button colored>APK</Button>
                <Button colored>Video Demo</Button>
              </CardActions>
              <CardMenu style={{ color: "#fff" }}>
                <IconButton name="share" />
              </CardMenu>
            </Card>

            <Card shadow={10} style={{ minWidth: "450", margin: "auto" }}>
              <CardTitle
                style={{
                  textShadow: "2px 2px 4px #ffffff",
                  color: "#0",
                  height: "250px",
                  background:
                    "url(https://my-test-11.slatic.net/p/aada763f5320009465593ad6db4cc554.jpg) center / cover"
                }}
              >
                MiniAudio
              </CardTitle>
              <CardText>
                A background media player that plays music in the background of
                all other apps minimizes to a bubble head or straight to the
                notification panel.
              </CardText>
              <CardActions border>
                <Button
                  colored
                  href="https://github.com/tylerhu3/miniAudio"
                  target="_blank"
                >
                  GitHub
                </Button>
                <Button colored>APK</Button>
                <Button colored>Video Demo</Button>
              </CardActions>
              <CardMenu style={{ color: "#fff" }}>
                <IconButton name="share" />
              </CardMenu>
            </Card>

            <Card shadow={10} style={{ minWidth: "450", margin: "auto" }}>
              <CardTitle
                style={{
                  textShadow: "2px 2px 4px #ffffff",
                  color: "#0",
                  height: "250px",
                  background:
                    "url(https://www.launchcode.org/blog/wp-content/uploads/2018/02/gail-blog-e1519328899987.jpg) center / cover"
                }}
              >
                LeetCode
              </CardTitle>
              <CardText>
                App composed of Leetcode.com questions along with some other
                sources. Built with a Navigation View showing several different
                subjects of interview questions.
              </CardText>
              <CardActions border>
                <Button
                  colored
                  href="https://github.com/tylerhu3/LeetCode"
                  target="_blank"
                >
                  GitHub
                </Button>
                <Button colored>APK </Button>
                <Button colored>Video Demo</Button>
              </CardActions>
              <CardMenu style={{ color: "#fff" }}>
                <IconButton name="share" />
              </CardMenu>
            </Card>
          </div>
        );
      case 1:
        return (
            <div style={{ paddingTop: "2%", fontFamily: "Oxygen" }}
            className="projects-grid">
              <Card shadow={10} style={{ minWidth: "450", margin: "auto" }}>
                <div className="portfolio-container">
                  <img
                    alt="test"
                    style={{
                      width: "100%",
                      height: "100%",
                      background: "center / cover"
                    }}
                    src={blogPic}
                  />
                  <CardTitle 
                  style={{
                      textShadow: "2px 2px 4px #ffffff",
                      color: "#0"
                    }}
                 >Blog 1.0</CardTitle>
                </div>
  
                <CardText>
                  Simple blog page use to demo MongoDB's primary functions: create(), findById(), findByIdAndUpdate, findByIdAndRemove and remove functions
                  using Restful Routes
                </CardText>
                <CardActions border>
                  <Button
                    colored
                    href="https://github.com/tylerhu3/BlogAndMongoDB"
                    target="_blank"
                  >
                    GitHub
                  </Button>
              
                </CardActions>
                <CardMenu style={{ color: "#fff" }}>
                </CardMenu>
              </Card>
            </div>
          );
      case 2:
        return (
          <div style={{ paddingTop: "2%", fontFamily: "Oxygen" }}
          className="projects-grid">
            <Card shadow={10} style={{ minWidth: "450", margin: "auto" }}>
              <div className="portfolio-container">
                <img
                  alt="test"
                  style={{
                    width: "100%",
                    height: "100%",
                    background: "center / cover"
                  }}
                  src={websitePic}
                />
                <CardTitle 
                style={{
                    textShadow: "2px 2px 4px #ffffff",
                    color: "#0"
                  }}
                className="bottom-left">Profile Page</CardTitle>
              </div>

              <CardText>
                Personal website made with ReactJS, ReactMDL, VantaJS.
              </CardText>
              <CardActions border>
                <Button
                  colored
                  href="https://github.com/tylerhu3/LeetCode"
                  target="_blank"
                >
                  GitHub
                </Button>
            
              </CardActions>
              <CardMenu style={{ color: "#fff" }}>
              </CardMenu>
            </Card>
          </div>
        );

      default:
        console.log("Project Selection Nonexistent");

        break;
    }
  }

  render() {
    return (
      <div>
        <div style={{ alignItems: "right" }}>
          <Tabs
            activeTab={this.state.activeTab}
            onChange={tabId => this.setState({ activeTab: tabId })}
            ripple
          >
            <Tab> Android </Tab>
            <Tab> MongoDB </Tab>
            <Tab> React </Tab>
          </Tabs>
        </div>

        <Grid class="project-grid">
          <Cell col={12}>{this.toggleCategories()}</Cell>
        </Grid>
      </div>
    );
  }
}
export default Projects;
