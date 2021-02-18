import React, { Component } from "react";
import { Card } from "antd";
import Grid from "@material-ui/core/Grid";

import StatsData from "../StatsData";

class StatisticsCard extends Component {
  render() {
    return (
      <div className="site-card-wrapper">
        <Card title={this.props.title} bordered={false}>
          <Grid item container spacing={2}>
            <Grid item xs={6}>
              <StatsData
                meta={this.props.data}
                data={this.props.meta}
                style={{
                  display: "flex",
                  justifyContnet: "space-around",
                  alignItems: "baseline",
                  fontSize: "large",
                }}
              />
            </Grid>
            <Grid item xs={6}>
              {this.props.circularChart}
            </Grid>
          </Grid>
        </Card>
      </div>
    );
  }
}

export default StatisticsCard;
