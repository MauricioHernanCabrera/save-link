import { useState, useEffect } from "react";

const useIsCreation = (modalVisible, modalData) => {
  const [isCreation, setIsCreation] = useState(false);

  useEffect(() => {
    if (modalVisible) {
      setIsCreation(modalData ? false : true);
    } else {
      setIsCreation(false);
    }
  }, [modalVisible, modalData]);

  return {
    isCreation,
  };
};

export default useIsCreation;
