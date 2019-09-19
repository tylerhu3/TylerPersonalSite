import React, { Component } from "react";
import { Grid, Cell, ProgressBar } from "react-mdl";

class Project extends Component {
  render() {
    return (
      <Grid style={{ fontFamily: "Oxygen" }}>
        <Cell col={12}>
          <Cell col={3} style={{ margin: "0px" }}>
            <div style={{ margin: "0px", display: "flex" }}>
              {this.props.skill}
            </div>
          </Cell>
          <Cell style={{ margin: "0px", width: "100%" }} col={11}>
             <div style={{backgroundColor:"#ffffff" }}>
            <ProgressBar
              style={{ margin: "auto", width: "100%" }}
              progress={this.props.progress}
            />
            </div>
          </Cell>
        </Cell>
      </Grid>
    );
  }
}