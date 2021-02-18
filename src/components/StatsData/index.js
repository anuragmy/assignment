import React, { Component } from "react";
import { Statistic } from "antd";

export default class StatsData extends Component {
  render() {
    return <Statistic title={this.props.meta} value={this.props.data} />;
  }
}
