import React, { useState, Fragment } from "react";
import { Table, Button } from "antd";

import config from "../../config";

console.log(config);

const Tags = () => {
  const [tags] = useState([
    {
      key: "1",
      name: "Mike",
    },
    {
      key: "2",
      name: "John",
    },
  ]);

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Actions",
      dataIndex: "actions",
      render: (_, item) => (
        <Fragment>
          <Button size="small" style={{ "margin-right": "6px" }}>
            Edit
          </Button>
          <Button size="small">Delete</Button>
        </Fragment>
      ),
    },
  ];

  return <Table dataSource={tags} columns={columns} />;
};

export default Tags;
