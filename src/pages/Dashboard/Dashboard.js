import React from "react";
import { Layout, Menu, Descriptions, Typography, Progress, Spin } from "antd";
import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from "@ant-design/icons";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import axios from "axios";

import HeaderTabs from "../../components/HeaderTabs";
import StatisticsCard from "../../components/StatisticsCard";
import CircularChart from "../../components/CircularChart";
import DescriptionCard from "../../components/DescriptionCard";
import DisplayTable from "../../components/DisplayTable";

const { Header, Sider, Content } = Layout;
const { Text } = Typography;

const url = "https://jsonplaceholder.typicode.com/todos";

class Dashboard extends React.Component {
  state = {
    collapsed: false,
    todos: [],
    loading: false,
  };

  getTodos = async () => {
    axios
      .get(url)
      .then((resp) => this.setState({ todos: resp.data, loading: false }));
  };

  componentDidMount() {
    this.setState({ loading: true });
    this.getTodos();
  }

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
          <Menu
            mode="inline"
            theme="light"
            defaultSelectedKeys={["1"]}
            style={{ height: "inherit" }}
          >
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
            <div
              style={{
                marginBottom: 20,
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Text>Data Overview</Text>
              <div>
                <Progress percent={30} showInfo={false} />
                <Text>603 insertions needed to complete</Text>
              </div>
            </div>
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
                <Grid item xs={12} md={6} lg={4}>
                  <DescriptionCard>
                    <Descriptions>
                      <Descriptions.Item label="term 1">
                        85.09
                      </Descriptions.Item>
                      <Descriptions.Item label="term 2">1.07</Descriptions.Item>
                      <Descriptions.Item label="term 3">
                        33.42
                      </Descriptions.Item>
                      <Descriptions.Item label="term4 ">
                        75.11
                      </Descriptions.Item>
                    </Descriptions>
                  </DescriptionCard>
                </Grid>
                {/* for table */}
                <Grid item xs={12}>
                  <div
                    style={{
                      marginBottom: 20,
                      marginTop: 20,
                    }}
                  >
                    Tasks
                  </div>
                  <DescriptionCard>
                    {this.state.loading ? (
                      <Spin size="large" />
                    ) : (
                      <DisplayTable data={this.state.todos} />
                    )}
                  </DescriptionCard>
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
