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

// import websitePic from "../assets/profile.jpg";
// import blogPic from "../assets/blog.jpg";

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
          <div>
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
                      "url(https://lh3.googleusercontent.com/mWWEfvGUwB8jbso8L6yRtzI0vyBkiyQ5J65JyhCtMOA134n_DuyJjH2qFVszM50HMHnZ3wMN1FuYZ2RRmYDJWDnOOzPI4pDeiWve8oBeFf9cxDs1VTGNTlTPrNZCAlHF3RvOv8S0kzr-3ViR7SF65__T1oIKEo0tFcBDf7Nb0uqxzFrttfjr3__AilbO2WiUUoBQctFb7hv3eVhflyXOMDKx-CMVzytbph2bZSkBgzv2183qTB0PAOnWKGnTurbIhuWr8kod5zYfnt-2erDMR9gUWWRqJaPKv3gk449tiMlsgklGv_Brje2Z-2gvWNj-VPZIs_vwcJFFLd-uR69J_ZCGBjZNoogPSw6HDAJBNJlSDNwtLWjn8hJsALhWtmxeMsRdc9u1CWfYwgYWyTjjH3hBkak9-kqMwsItBcqOXDYi__XqjGM7c-NxKx3iuVCnY7jVPLs4zR9UeGsg_BCfYiH7M05MK9SUU09TrPLe0aRk0deiCm4KiLe6qySNI2Tm7-lb2koHQzZnzUwZl13_cMnbanb5-itZem1aBnQn0rAX8IXUVLdYoD3EDy3qnB9Gd3cOaT1i67VKtpij7SVo549PjBQOPebVeLEUqL13tCQ0EEyQ5JdRWHPfolVmWtBzTeW-8v4anj4qgPGtfv69jlLjtI8wNwqZun7600_yIaWZPT5qeX1QfNvZ=w1023-h682-no) center / cover"
                  }}
                >
                  TODO List Widget
                </CardTitle>
                <CardText>
                  Simple TODO List Widget made for the Android 6 and below. It's
                  resizable and items are saved to a json file. Future plans:
                  plan to fixe for Android 6 and above.
                </CardText>
                <CardActions border>
                  <Button
                    href="https://github.com/tylerhu3/TODOWidget"
                    target="_blank"
                    colored
                  >
                    GitHub
                  </Button>

                  <Button
                    colored
                    href=" https://drive.google.com/open?id=1bmiz_jFWV8iUY5kRNFJiT-iRk21ppl35"
                    target="_blank"
                  >
                    APK
                  </Button>
                  <Button
                    colored
                    href="https://youtu.be/jSAk-C1H-vo"
                    target="_blank"
                  >
                    Video Demo
                  </Button>
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
                      "url(https://lh3.googleusercontent.com/bwza_szm9Vmab2FyJyRHEN0rlNG2i4yYNCNN0ZtS83IVCJgkwneCwsFrU5YhyLKIAd1B5qpzse-_4Kp8cXiDEL6gTBSWWXvZOApYkz5WdO-ERU6QwCVwA1g5gL0-QoEUroriy32rCVOY7Pb8YX857kB8Hie1toK9HHKFOaEl9zZ_l9yLd1ChBoxzYYM722L9jBmh04-UzBjzYV1-NW_vM8jV3nhdj2mruJO96KxUbdc1uIVMs6nn3b6fH-FsTe9ZU-No_bMwhOWxCnbqjYVjs-FGwBaqwX4JSluHanyrnHn200mG1A-Zzch57NWAFDhjh8w0-_iIMk2Zk4VTnaYVmO9lEZNCZ1nI7R9_um-HLNHreB4H8DcSEHUW1W9XSfcgnCW4ZkM7sGqPxNGrWxcdFjKa0iOU6OAZ3yHbjpoGBEn22GB2yepbOg58aokfqGwIlY4caRTfrXB-QbAtqwHr_kYBfEtsiGHZlczU_llFHvN6zTrIh9xd6-GX3DtaTwP-K4V_UtXmc0Kuur5YiYfQqTuZWr039zdV5JNVyxlfgx-TNdiXfYJSJal8mSOT3on-6zrlhpaLLAPcuii0gJHNCe1PZkXhb3q0lGuujkp7wjHHsEbSOt37Qn4W6oHyCrYg-G1n502vxrMaALs8eAJFR1E50ZIAHIBWho_e0SLl7nItUqtbaEKMIC1F=w700-h525-no) center / cover"
                  }}
                >
                  MiniAudio
                </CardTitle>
                <CardText>
                  A background media player that plays music in the background
                  of all other apps minimizes to a bubble head or straight to
                  the notification panel.
                </CardText>
                <CardActions border>
                  <Button
                    colored
                    href="https://github.com/tylerhu3/miniAudio"
                    target="_blank"
                  >
                    GitHub
                  </Button>

                  <Button
                    colored
                    href="https://drive.google.com/open?id=1Q1R0GnRXGtmPOxp-T9qElOfgEjIYIoQZ"
                    target="_blank"
                  >
                    APK
                  </Button>
                  <Button
                    colored
                    href="https://youtu.be/ig8wDm3kDTc"
                    target="_blank"
                  >
                    Video Demo
                  </Button>
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
                      "url(https://lh3.googleusercontent.com/i_AoUWxJCSEbDQJmJXLFdEIto-D5hla0tGirr3SkhTMDxK8K--5KXB-dH0mbYLAZMhcn4oxfV3jh7h-TdV2xc_7YlBp-ueG3b_EufPrPodBdmZ8HOwr7DETd1oCNOUk7AQVFU5Y5267VX2fefQRZ0mmaD4IIg2U2T-B95qyiajFdG0lNBiLQYkDuB-AQCYTXgEMfLRTvvAtFCA94vQmE1ljJcmxHAfaMJ6sssLjloxAshsUszkojROUae5rOCCu4MBbmZdpFh8xg0T-Ig5f-h1wZXiHMTaqU0kmGx1dBQ_J4Ik_9HhnkAMpVJZ14MlA6JIZvtbYq1a6bA6AUGy1HDtXyF7cj9PAXPabB_BlHRSCjxb5R5B11XaMHiHylV3Tkt6vYGYUEMEeIFd6FC4_ESgKLAgWjKkJW-dxIDlgyQQH3h2iwsRszxYVEifz9C3agTv5ggzOmAR4SEaiPB1dQFbWYy8tV56x0KBahftxV8ZlL1DJ0yLRNGhpPvhH--9LQKNi0CmtxiqZAUZ2BPiZJr2YeAc8lqvHHUQTzjCPFKeMdd3CVYhDc2f6B_kLU0hyErMidA6LZiYdFHBqqeKNxb0yAGXaxLdho_t_slKbFIZ7jt5yzZxFrcwaxReA9CQsQbiHhvlKIE7ut5YIiDiRJNSw4wgV4Udy2knDetL_BQ8EQbkK0QI7ovHwQ=w2490-h1736-no) center / cover"
                  }}
                >
                  LeetCode+
                </CardTitle>
                <CardText>
                  App composed of Leetcode.com questions along with some other
                  sources. Built with a Navigation View showing several
                  different subjects of interview questions.
                </CardText>
                <CardActions border>
                  <Button
                    colored
                    href="https://github.com/tylerhu3/LeetCode"
                    target="_blank"
                  >
                    GitHub
                  </Button>
                  <Button
                    colored
                    href="https://drive.google.com/open?id=1cXy0RLqN6VHEVOUq4krGTeWQqZTOC9uS"
                    target="_blank"
                  >
                    APK{" "}
                  </Button>
                  <Button
                    colored
                    href="https://youtu.be/Jmvp-GVZEs8"
                    target="_blank"
                  >
                    Video Demo
                  </Button>
                </CardActions>
                <CardMenu style={{ color: "#fff" }}>
                  <IconButton name="share" />
                </CardMenu>
              </Card>
            </div>

            <div
              className="mdl-shadow--4dp  mdl-color--white "
              style={{marginLeft:"50px", marginTop: "350px", width:"90%"}}
            >
              <div style={{padding : "20px"}}>
                <h3 style={{ paddingTop:"20px",  textAlign: "left" }}>
                  Installation Notes:
                </h3>
                <p>
                  If you are planning to installing the APK files, you will need "EZ File Explorer" from the Play store,
                  once you have it,  all you have to do is get these files on to your phone and open the files with EZ file
                  Explorer. After which, the files should install properly. 
                  
                </p>
                <p>
                TODO Widget: If your install this on devices newer than Android 6, there could be errors, mainly the device
                  will recognize it as a old app but you still have the option to install it. In addition, it needs the proper
                  permissions to save data.
                <br></br>
                MiniAudio: On the first run, this app will request draw over permission, you will have to accept it on the initial
                    launch, afterwards close the app completely and rerun, in which it will work from there.
                </p>
                
              </div>
            </div>
          </div>
        );
      case 1:
        return (
          <div
            style={{ paddingTop: "2%", fontFamily: "Oxygen" }}
            className="projects-grid"
          >
            <Card shadow={10} style={{ minWidth: "450", margin: "auto" }}>
              <div className="portfolio-container">
                <CardTitle
                  style={{
                    textShadow: "2px 2px 4px #ffffff",
                    color: "#0",
                    height: "250px",
                    background:
                      "url(https://lh3.googleusercontent.com/qHl-Fyfj_dajBHBfsomMJ4itwxPIp1x6mnaaSFo50BMKh-rRA0tq_dVc20J_nhZiDYM2D1TYIawu3A-8ePO45WlUDKSVGJfOo1TVjyU-QJICx65KZDC-HZnguqjPsjA-agRo6hdd_1rTs6bam4-xLPM_xVbzP0MPX_i4PSYW34X3WrFePu8dmfFJsmcP5QbSP5hYWT1vNXY9K3N7zyyMdnqR2OC0vEgXx1stqXdgsjl_3uoKtY3I0fGiymvT3zp8XOJOsKBO0Za2KUtMZCCOBSjqGMtVyliqDMjNpxoRwW7KVdLhanAJpnL-tq-cBGtti2aVnrExGZYVF1lyzeoQ7cGgSMBBncAhw32aBv_tCjSTQ5ty15vlwHyzwexi5VyOHksahVz6DvRfasMnRmkEIYc8fJaHCWPt2DPh_WLtMQJ6O14FMjYpuG6o-Ip0UvhIz7Qho63uXJhfywf1IM00xtQb7OihNR2hqDG5hvS5WkgIHquUpQclTfA5nmLzOddo-0GPkUQFNLdhfNyAFSUKIJ_r1rEgDt5o2ZGVB16Q6dTtcQ0U2e48nJKsuV2qV10WlBw-lpJMrmRsfNmeY_00SPr1hiKcjBRJOiBh04uT8kslB_AxqX8onMLDZ0ahdO8MwqxgO6b-V08pJb3Z1wGOFdL3wQVjMHAhDNUCn3c7G_MJLrLIaaaWU-Ik=w1654-h1222-no) center / cover"
                  }}
                >
                  Blog 1.0
                </CardTitle>
              </div>

              <CardText>
                Simple blog page made with NodeJS, Express, MongoDB to demo MongoDB's primary functions:
                create(), findById(), findByIdAndUpdate, findByIdAndRemove and
                remove functions using RESTful Routes
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
              <CardMenu style={{ color: "#fff" }}></CardMenu>
            </Card>
          </div>
        );
      case 2:
        return (
          <div
            style={{ paddingTop: "2%", fontFamily: "Oxygen" }}
            className="projects-grid"
          >
            <Card shadow={10} style={{ minWidth: "450", margin: "auto" }}>
              <div className="portfolio-container">
                <CardTitle
                  style={{
                    textShadow: "2px 2px 4px #ffffff",
                    color: "#0",
                    height: "250px",
                    background:
                      "url(https://lh3.googleusercontent.com/Wz6i5Sn-ohvZfyQN3p-ohEQKEwAiSaKSMumxV4GD80fIaXEXirX1mL9wVWCB6j-9YiC6sxiWS9PejBOz1473bBPPWYlbnj5E2gPwAU2ugVCgt948y8cWoiJGUejq_m4qrLs4jKT-WPDWNfOFIWSrAzyVOKN5SM33iqHub-qPxFxQmiXzpUk70LkL_SptrFv4HMfNr9zq3NKOIEyT-oYUeqelyyOdwsa3lq-uxQBxlH_KyfGyZxLVXjUdokTW_hgBPICeITADHLajg0yp4N7qnGYWSOAkh_zC-kUdrMyrKlAnDgVw2ugVERoDuQDQp30929wASYdAkD7947FCYqhtRyUqW1ORpSo1IhtgxyvHZ_d-wZV-dROqjlOIEek_dY3uTdp9BAl1EdoDkqt1njSORquYbhuR1N1pDIiaIaFNp3YSrZWBsatm0M-JrEim_ZRcqBlA3NevzjYZPmK0KJY2XC8Gq3DDR5AGvD6-FS57K1fT4gkCkqU0yMyZLr4pmGmdyiP0YvJGJXAc1hLH57GzbpEUE1FODiVVbLNOnEbBuU57SVifriVQwAdrbjos7tBGuEWf0wsUDjbJYmD7n1LjevNEvcFLHPOEZxw7HImYvtFC0UBK0yTpAa-oBAA3ACfVg8kiCmPUL2bpI2WsotodgBM2yUE0ZcnejICBmVLb28l9acb1mD-Tpp2P=w1504-h1364-no) center / cover"
                  }}
                >
                  Profile Page
                </CardTitle>
              </div>

              <CardText>
                Personal website made with ReactJS, ReactMDL, VantaJS, NodeJS.
              </CardText>
              <CardActions border>
                <Button
                  colored
                  href="https://github.com/tylerhu3/TylerPersonalSite"
                  target="_blank"
                >
                  GitHub
                </Button>
              </CardActions>
              <CardMenu style={{ color: "#fff" }}></CardMenu>
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
