import React, { Component } from "react";
import {
  Card,
  Grid,
  Cell,
  List,
  ListItem,
  ListItemContent
} from "react-mdl";


import avatarPic from "../assets/ProfileHead.png";

class Contact extends Component {
  constructor() {
    super();
    this.state = {
      width: window.innerWidth
    };
    this.myRef = React.createRef();
  }

  componentWillMount() {
    window.addEventListener("resize", this.handleWindowSizeChange);
  }

  handleWindowSizeChange = () => {
    this.setState({ width: window.innerWidth });
  };

  componentDidMount() {
    //if we want effects for this page in the future, simply uncomment the below
    //and the part on componentWillUnmount
    // this.effect = window.VANTA.RINGS({
    //   el: "#theRing",
    //   backgroundColor: 0xffffff,
    //   color1: 0x95cb9,
    //   color2: 0x4a00ff,
    //   colorMode: "lerp"
    // });
  }
  componentWillUnmount() {
    // if (this.effect) this.effect.destroy();
  }

  contactAbstracted(){
    return (
      <div>
         <Card
          shadow={10}
          style={{
            marginTop: "5%",
            marginLeft: "auto",
            marginRight: "auto",
            paddingBottom: "5%",
            width: "80%",
            textAlign: "center"
          }}
        >
          <Grid style={{ width: "100%" }}>
            <Cell phone={12} col={6}>
              <h3 style={{ fontFamily: "Oxygen" }}>Tyler Hu</h3>
              <img
                src={avatarPic}
                alt="avatar"
                style={{ height: "250px" }}
              />
              <p style={{ width: "74%", margin: "auto", paddingTop: "1em" }}>
                Recently graduated from University of California, Santa Cruz
                with a BS in Computer Science.
              </p>
            </Cell>

            <Cell style={{ marginTop: "2%" }} phone={12} col={6}>
              <h3 style={{ textAlign: "center", fontFamily: "Oxygen" }}>
                Contact Me
              </h3>
              <Cell col={11}>
                <hr style={{ textAlign: "center" }} />
              </Cell>
              <div className="contact-list">
                <List>
                  <ListItem>
                    <ListItemContent style={{ fontSize: "18px" }}>
                      <i class="fas fa-phone-square-alt" aria-hidden="true" />
                      (510) 701-7525
                    </ListItemContent>
                  </ListItem>
                  <ListItem>
                    <ListItemContent style={{ fontSize: "18px" }}>
                      <i class="fas fa-envelope-square" aria-hidden="true" />
                      tylerhu8@gmail.com
                    </ListItemContent>
                  </ListItem>

                  <ListItem>
                    <ListItemContent style={{ fontSize: "18px" }}>
                      <i class="fab fa-skype" aria-hidden="true" />
                      tylerhu3
                    </ListItemContent>
                  </ListItem>

                  <ListItem>
                    <ListItemContent style={{ fontSize: "18px" }}>
                      <i class="fab fa-linkedin" aria-hidden="true" />
                      tylerhu89
                    </ListItemContent>
                  </ListItem>
                </List>
              </div>
            </Cell>
          </Grid>
        </Card>
        </div>
    )
  }
  render() {

    const { width } = this.state;
    const isMobile = width <= 700;
    if(isMobile){
    return (
      <div  style={{ width: "100%", height: "100%", marginTop: "18%"}}>
      {this.contactAbstracted()}
      </div>
    );
  }
  return (
    <div style={{ width: "100%", height: "100%"}}>
      {this.contactAbstracted()}
      </div>
  )
  }
}
export default Contact;
