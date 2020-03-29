import React, { Component } from "react";
import "./App.css";
import { Layout, Header, Drawer, Navigation, Content } from "react-mdl";
import Main from "./components/main";
import { Link } from "react-router-dom";
class App extends Component {
  render() {
    const rollOverTextColor = "cyan";
    const normalTextColor = "white";
    return (
      <div style={{ fontFamily: "Oxygen", width: "100%", height: "100%" }}>
        <Layout>
          <Header
            style={{ backgroundColor: "#3155ac" }}
            title={
              <Link
                style={{ textDecoration: "none", color: normalTextColor }}
                to="/"
              >
                <div style={{ fontFamily: "Oxygen", fontSize: "20px" }}>
                  Main
                </div>
              </Link>
            }
            scroll
          >
            <Navigation>
              <Link
                onMouseOver={event => {
                  event.target.style.color = rollOverTextColor;
                }}
                onMouseOut={event => {
                  event.target.style.color = normalTextColor;
                }}
                style={{ fontSize: "20px" }}
                to="/resume"
              >
                 Resume 
                 {/* <i className="fas fa-paperclip" /> */}
              </Link>
              <Link
              onMouseOver={event => {
                event.target.style.color = rollOverTextColor;
              }}
              onMouseOut={event => {
                event.target.style.color = normalTextColor;
              }}
               style={{ fontSize: "20px" }} to="/projects">
                {/* <i className="fas fa-flask"></i>  */}
                Projects
              </Link>
              <Link 
              onMouseOver={event => {
                  event.target.style.color = rollOverTextColor;
                }}
                onMouseOut={event => {
                  event.target.style.color = normalTextColor;
                }}
                 style={{ fontSize: "20px" }} to="/contact">
                {/* <i className="fas fa-address-card"></i>  */}
                Contact
              </Link>
              <Link 
              onMouseOver={event => {
                  event.target.style.color = rollOverTextColor;
                }}
                onMouseOut={event => {
                  event.target.style.color = normalTextColor;
                }}
                 style={{ fontSize: "20px" }} to="/aboutme">
                {/* <i className="fas fa-user-alt"></i>  */}
                About Me
              </Link>
            </Navigation>
          </Header>

          <Drawer
            style={{ backgroundColor: "#3155ac" }}
            title={
              <Link
                style={{
                  borderBottom: "5px dotted black",
                  textDecoration: "none",
                  color: "white"
                }}
                to="/"
              >
                <div style={{ fontFamily: "Oxygen", fontSize: "23px" }}>
                  Main
                </div>
              </Link>
            }
          >
            <Navigation style={{ backgroundColor: "#3155ac" }}>
              <Link to="/resume" style={{ color: "white", fontSize: "23px" }}>
                Resume
              </Link>
              <Link to="/projects" style={{ color: "white", fontSize: "23px" }}>
                {" "}
                Projects
              </Link>
              <Link to="/contact" style={{ color: "white", fontSize: "23px" }}>
                Contact
              </Link>
         
              <Link
                id="test"
                to="/aboutme"
                style={{ color: "white", fontSize: "23px" }}
              >
                About Me
              </Link>
         
            </Navigation>
          </Drawer>

          <Content>
            <Main />
          </Content>
        </Layout>
      </div>
    );
  }
}

export default App;
