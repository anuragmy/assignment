import React, { Component } from "react";

import { Tabs } from "antd";

const { TabPane } = Tabs;

class HeaderTabs extends Component {
  render() {
    return (
      <Tabs defaultActiveKey="1">
        <TabPane tab="Tab 1" key="1" />
        <TabPane tab="Tab 2" key="2" />
        <TabPane tab="Tab 3" key="3" />
      </Tabs>
    );
  }
}

export default HeaderTabs;
