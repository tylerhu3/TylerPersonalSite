import React, { Component } from "react";
import "./App.css";
import { Layout, Header, Drawer, Navigation, Content } from "react-mdl";
import Main from "./components/main";
import { Link } from "react-router-dom";
class App extends Component {
  


  render() {
    return (
      <div style={{ fontFamily: "Oxygen", width: "100%", height: "100%"}}>
        <Layout>
          <Header
            style={{ backgroundColor: "#3155ac" }}
            title={
              <Link style={{ textDecoration: "none", color: "white" }} to="/">
                <div style={{ fontFamily: "Oxygen", fontSize: "23px" }}>
                  Main
                </div>
              </Link>
            }
            scroll
          >
            <Navigation>
              <Link to="/resume" >
                Resume
              </Link>
              <Link to="/projects">Projects</Link>
              <Link to="/contact">Contact</Link>
              <Link to="/aboutme">About Me</Link>
            </Navigation>
          </Header>

          <Drawer
            style={{  backgroundColor: "#3155ac" }}
            title={
              <Link
                style={{
                  borderBottom: "5px dotted black",
                  textDecoration: "none",
                  color: "black"
                }}
                to="/"
              >
                {" "}
                <div style={{ fontFamily: "Oxygen", fontSize: "23px" }}>
                  Main
                </div>{" "}
              </Link>
            }
          >
            <Navigation style={{ backgroundColor: "#3155ac" }}>
              <Link
                id="test"
                to="/aboutme"
                style={{ color: "black", fontSize: "23px" }}
              >
                About Me
              </Link>
              <Link to="/resume" style={{ color: "black", fontSize: "23px" }}>
                Resume
              </Link>
              <Link to="/projects" style={{ color: "black", fontSize: "23px" }}>
                {" "}
                Projects
              </Link>
              <Link to="/contact" style={{ color: "black", fontSize: "23px" }}>
                Contact
              </Link>
            </Navigation>
          </Drawer>

          <Content>
            <div className="page-content" />
            <Main />
          </Content>
        </Layout>

      </div>
    );
  }
}

export default App;
