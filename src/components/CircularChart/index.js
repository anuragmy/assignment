import React, { Component } from "react";
import { Progress } from "antd";

class CircularChart extends Component {
  render() {
    return (
      <Progress
        type="circle"
        percent={65}
        showInfo={false}
        strokeColor={this.props.color}
        strokeWidth={10}
      />
    );
  }
}

export default CircularChart;
