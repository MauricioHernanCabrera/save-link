import { useEffect, useContext } from "react";
import { useLocation } from "react-router-dom";
import { Context } from "./../Context";

const useEffectTitle = (title) => {
  const location = useLocation();
  const { setTitle } = useContext(Context);

  useEffect(() => {
    setTitle(title);
  }, [location.pathname, setTitle, title]);

  return {};
};

export default useEffectTitle;
