import React, { Component } from "react";
import { Grid, Cell, List, ListItem, ListItemContent } from "react-mdl";

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
      <div id = "theRing" className="contact-body">
        <Grid className="contact-grid" style= {{ textAlign: "center"}}>
          <Cell col={6}>
            <h2>Tyler Hu</h2>
            <img
                src="https://cdn1.iconfinder.com/data/icons/people-49/512/_nerd_man-512.png" 
              alt="avatar"
              style={{ height: "250px" }}
            />
            <p style={{ width: "74%", margin: "auto", paddingTop: "1em" }}>
              Recently graduated from University of California, Santa Cruz with a BS in Computer Science. 
            </p>
          </Cell>
          <Cell col={6}>
            
          <h2 style={{textAlign:"left"}}>Contact Me</h2>
          <Cell col={8}>
            <hr style={{textAlign:"left"}} />
          </Cell>
            <div className="contact-list">
              <List>

                <ListItem>
                  <ListItemContent style={{ fontSize: "30px", fontFamily: "Anton" }}
                  >
                    <i  class="fas fa-phone-square-alt" aria-hidden="true" />
                      (510) 701-7525   
                  </ListItemContent>  
                </ListItem>


                <ListItem>
                  <ListItemContent style={{ fontSize: "30px", fontFamily: "Anton" }}
                  >
                    <i class="fas fa-envelope-square" aria-hidden="true" />
                      tylerhu8@gmail.com 
                  
                  </ListItemContent>  
                </ListItem>

                <ListItem>
                  <ListItemContent style={{ fontSize: "30px", fontFamily: "Anton" }}
                  >
                    <i class="fab fa-skype" aria-hidden="true" />
                      tylerhu3
                  </ListItemContent>  
                </ListItem>

                <ListItem>
                  <ListItemContent style={{ fontSize: "30px", fontFamily: "Anton" }}
                  >

                    <i class="fab fa-linkedin" aria-hidden="true" />
                    tylerhu89
                  </ListItemContent>  
                </ListItem>

            </List>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}
export default Contact;
