import React, { Fragment, useContext } from "react";
import { Table, Tag, Button } from "antd";
import { Context } from "./../../Context";

import useModal from "./../../hooks/useModal";
import { findIndex, remove } from "lodash";

// import ModalTag from "./../../components/ModalTag";
import ModalDelete from "./../../components/ModalDelete";

const Links = () => {
  const { links, setLinks } = useContext(Context);
  const { modal, setModal, onCancel } = useModal();

  const onDeleteTag = (item) => {
    const onOk = (data) => {
      setModal({ ...modal });
      const clone = links.slice();
      remove(clone, (tag) => tag.key === data.key);
      setLinks(clone);
      onCancel();
    };

    setModal({
      ...modal,
      visible: "delete",
      title: "Delete link",
      onOk,
      okText: "Delete",
      data: item,
    });
  };

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
          {tags.length === 0 && "-"}
          {tags.map((tag) => (
            <Tag key={tag}>{tag.toUpperCase()}</Tag>
          ))}
        </span>
      ),
    },

    {
      title: "Actions",
      dataIndex: "actions",
      render: (_, item) => (
        <Fragment>
          <Button size="small" style={{ marginRight: "6px" }}>
            Copy
          </Button>

          <Button size="small" style={{ marginRight: "6px" }}>
            Edit
          </Button>

          <Button
            size="small"
            style={{ marginRight: "6px" }}
            onClick={() => onDeleteTag(item)}
          >
            Delete
          </Button>
        </Fragment>
      ),
    },
  ];

  return (
    <Fragment>
      <Table dataSource={links} columns={columns} />

      <ModalDelete
        {...modal}
        visible={modal.visible === "delete"}
        onCancel={onCancel}
      />
    </Fragment>
  );
};

export default Links;
