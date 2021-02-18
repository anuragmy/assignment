import React from "react";
import { Layout, Menu, Button } from "antd";
import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from "@ant-design/icons";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";

import HeaderTabs from "../../components/HeaderTabs";
import StatisticsCard from "../../components/StatisticsCard";
import CircularChart from "../../components/CircularChart";

const { Header, Sider, Content } = Layout;

class Dashboard extends React.Component {
  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    return (
      <Layout>
        <Sider trigger={null} collapsed>
          <div className="logo" />
          <Menu mode="inline" theme="light" defaultSelectedKeys={["1"]}>
            <Menu.Item key="1" icon={<UserOutlined />}>
              nav 1
            </Menu.Item>
            <Menu.Item key="2" icon={<VideoCameraOutlined />}>
              nav 2
            </Menu.Item>
            <Menu.Item key="3" icon={<UploadOutlined />}>
              nav 3
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          {/* <Header
            className="site-layout-background"
            style={{
              padding: 0,
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <HeaderTabs style={{ width: "100%" }} />
            <Button type="primary">Premium</Button>
          </Header> */}
          <Content
            className="site-layout-background"
            style={{
              margin: "24px 16px",
              padding: 24,
              minHeight: 280,
            }}
          >
            <div style={{ marginBottom: 20 }}>Data Overview</div>
            <Container>
              <Grid item container spacing={1}>
                <Grid item xs={12} md={6} lg={4}>
                  <StatisticsCard
                    title="General Results"
                    data="9.401"
                    meta="Followers"
                    circularChart={<CircularChart />}
                  />
                </Grid>
                <Grid item xs={12} md={6} lg={4}>
                  <StatisticsCard
                    data="3.900"
                    meta="Followers"
                    title="Ratings By Catagory"
                    circularChart={<CircularChart color="red" />}
                  />
                </Grid>
              </Grid>
            </Container>
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default Dashboard;
