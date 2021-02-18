import React, { Component } from "react";
import { Table, Tag, Space, Button } from "antd";

const columns = [
  {
    title: "User ID",
    dataIndex: "userId",
    key: "id",
    render: (text) => <a>{text}</a>,
  },

  {
    title: "Id",
    dataIndex: "id",
    key: "id",
  },
  {
    title: "Title",
    dataIndex: "title",
    key: "title",
  },
  {
    title: "Completed",
    dataIndex: "completed",
    key: "completed",
    render: (completed) => (
      <Button type={completed ? "primary" : ""}>
        {completed ? "True" : "False"}
      </Button>
    ),
  },
];

class DisplayTable extends Component {
  render() {
    return (
      <Table
        columns={columns}
        dataSource={this.props.data}
        scroll={{ y: 240 }}
      />
    );
  }
}

export default DisplayTable;
