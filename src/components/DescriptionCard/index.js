import React, { Children, Component } from "react";
import { Card } from "antd";

class DescriptionCard extends Component {
  render() {
    return <Card>{this.props.children}</Card>;
  }
}

export default DescriptionCard;
