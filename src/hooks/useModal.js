import { useState } from "react";

const useModal = ({
  visible = false,
  title = "default title",
  cancelText = "Cancel",
  okText = "Ok",
  width = "400px",
  onOk = () => {},
} = {}) => {
  const [modal, setModal] = useState({
    visible,
    title,
    cancelText,
    okText,
    width,
    onOk,
  });

  const onCancel = () => {
    setModal({ ...modal, visible: "" });
  };

  const updateModal = (modalConfig = {}) => {
    setModal(modalConfig);
  };

  return {
    modal,
    setModal: updateModal,
    onCancel,
  };
};

export default useModal;
