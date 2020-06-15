import { useEffect } from "react";

const useEffectFormState = (modalVisible, modalData, setForm) => {
  useEffect(() => {
    if (modalVisible) {
      setForm(modalData || {});
    } else {
      setForm({});
    }
  }, [modalVisible, modalData, setForm]);

  return {};
};

export default useEffectFormState;
