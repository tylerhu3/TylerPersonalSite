import React, { Component } from "react";
import "./App.css";
import { Layout, Header, Drawer, Navigation, Content } from "react-mdl";
import Main from "./components/main";
import { Link } from "react-router-dom";
class App extends Component {



  render() {
    return (
      <div style={{ fontFamily: "Oxygen", width: "100%", height: "100%" }}>
        <Layout>
          <Header
            style={{ backgroundColor: "#3155ac" }}
            title={
              <Link style={{ textDecoration: "none", color: "white" }} to="/">
                <div style={{ fontFamily: "Oxygen", fontSize: "20px" }}>
                  Main
                </div>
              </Link>
            }
            scroll
          >
            <Navigation >


              <Link style={{ fontSize: "20px" }} to="/resume" >
                <i class="fas fa-paper-plane"></i> Resume
              </Link>
              <Link style={{ fontSize: "20px" }} to="/projects">
                <i class="fas fa-project-diagram"></i> Projects
              </Link>
              <Link style={{ fontSize: "20px" }} to="/contact">
                <i class="fas fa-phone-alt"></i> Contact
              </Link>
              <Link style={{ fontSize: "20px" }} to="/aboutme">
                <i class="fas fa-address-card"></i> About Me</Link>

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
              <Link
                id="test"
                to="/aboutme"
                style={{ color: "white", fontSize: "23px" }}
              >
                About Me
              </Link>
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
