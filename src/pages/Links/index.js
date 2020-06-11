import React, { useState, Fragment } from "react";
import { Table, Tag, Button } from "antd";

import config from "../../config";

console.log(config);

const Links = () => {
  const [tags] = useState([
    {
      key: "1",
      name: "Mike",
      url: "https://mauriciohernancabrera.github.io",
      tags: ["Hola", "Mundo"],
    },
    {
      key: "2",
      name: "John",
      url: "https://mauriciohernancabrera.github.io",
      tags: ["Hola", "Mundo222"],
    },
  ]);

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "URL",
      dataIndex: "url",
      key: "url",
    },
    {
      title: "Tags",
      dataIndex: "tags",
      key: "tags",
      render: (tags) => (
        <span>
          {tags.map((tag) => {
            let color = tag.length > 5 ? "geekblue" : "green";
            if (tag === "loser") {
              color = "volcano";
            }
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </span>
      ),
    },

    {
      title: "Actions",
      dataIndex: "actions",
      render: (_, item) => (
        <Fragment>
          <Button size="small" style={{ "margin-right": "6px" }}>
            Copy
          </Button>
          <Button size="small" style={{ "margin-right": "6px" }}>
            Edit
          </Button>
          <Button size="small" style={{ "margin-right": "6px" }}>
            Delete
          </Button>
        </Fragment>
      ),
    },
  ];

  return <Table dataSource={tags} columns={columns} />;
};

export default Links;
