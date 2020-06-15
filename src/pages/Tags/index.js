import React, { Fragment, useContext } from "react";

import { Table, Button } from "antd";

import { findIndex, remove } from "lodash";

import useModal from "./../../hooks/useModal";

import ModalTag from "./../../components/ModalTag";
import ModalDelete from "./../../components/ModalDelete";
import { Context } from "./../../Context";

const Tags = () => {
  const { tags, setTags } = useContext(Context);
  const { modal, setModal, onCancel } = useModal();

  const onCreateTag = () => {
    const onOk = (tagCreated) => {
      const clone = JSON.parse(JSON.stringify(tags));
      clone.push({
        ...tagCreated,
        key: Date.now(),
      });
      setTags(clone);
      onCancel();
    };

    setModal({
      ...modal,
      visible: "create-or-update",
      title: "Create tag",
      onOk,
      okText: "Create",
    });
  };

  const onEditTag = (tagItem) => {
    const onOk = (tagUpdated) => {
      const clone = JSON.parse(JSON.stringify(tags));
      const tagIndex = findIndex(tags, ["key", tagUpdated.key]);
      clone[tagIndex] = tagUpdated;
      setTags(clone);
      onCancel();
    };

    setModal({
      ...modal,
      visible: "create-or-update",
      title: "Edit tag",
      onOk,
      okText: "Edit",
      data: tagItem,
    });
  };

  const onDeleteTag = (item) => {
    const onOk = (data) => {
      setModal({ ...modal });
      const clone = tags.slice();
      remove(clone, (tag) => tag.key === data.key);
      setTags(clone);
      onCancel();
    };

    setModal({
      ...modal,
      visible: "delete",
      title: "Delete tag",
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
      title: "Actions",
      dataIndex: "actions",
      render: (_, item) => (
        <Fragment>
          <Button
            size="small"
            style={{ marginRight: "6px" }}
            onClick={() => onEditTag(item)}
          >
            Edit
          </Button>

          <Button size="small" onClick={() => onDeleteTag(item)}>
            Delete
          </Button>
        </Fragment>
      ),
    },
  ];

  return (
    <Fragment>
      <Button
        size="small"
        style={{ marginBottom: "6px" }}
        onClick={onCreateTag}
      >
        New
      </Button>

      <Table dataSource={tags} columns={columns} />

      <ModalTag
        {...modal}
        visible={modal.visible === "create-or-update"}
        onCancel={onCancel}
      />

      <ModalDelete
        {...modal}
        visible={modal.visible === "delete"}
        onCancel={onCancel}
      />
    </Fragment>
  );
};

export default Tags;
