import React from "react";
import { Modal, Input } from "antd";
import useForm from "./../../hooks/useForm";
import useIsCreation from "./../../hooks/useIsCreation";
import useEffectFormState from "./../../hooks/useEffectFormState";

const ModalTag = ({ onCancel, ...modal }) => {
  const { form, setForm, onChange } = useForm();
  useEffectFormState(modal.visible, modal.data, setForm);
  const { isCreation } = useIsCreation(modal.visible, modal.data);

  const onOk = () => {
    modal.onOk(form, isCreation);
  };

  return (
    <Modal
      {...modal}
      onCancel={onCancel}
      onOk={onOk}
      // okButtonProps={{ disabled: form && !form.name }}
    >
      <Input
        placeholder="Name"
        onChange={(event) => onChange("name", event.target.value)}
        value={form.name || ""}
      />
    </Modal>
  );
};

export default ModalTag;
