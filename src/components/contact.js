import React, { Component } from "react";
import {
  Card,
  Grid,
  Cell,
  List,
  ListItem,
  ListItemContent
} from "react-mdl";

class Contact extends Component {
  constructor() {
    super();
    this.myRef = React.createRef();
  }
  componentDidMount() {
    this.effect = window.VANTA.RINGS({
      el: "#theRing",
      backgroundColor: 0xffffff,
      color1: 0x95cb9,
      color2: 0x4a00ff,
      colorMode: "lerp"
    });
  }
  componentWillUnmount() {
    if (this.effect) this.effect.destroy();
  }
  render() {
    return (
      <div id="theRing" style={{ width: "100%", height: "100%" }}>
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
                src="https://cdn1.iconfinder.com/data/icons/people-49/512/_nerd_man-512.png"
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
    );
  }
}
export default Contact;
