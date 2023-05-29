import { useEffect } from "react";
import { useLocation, useNavigationType } from "react-router-dom";

const ScrollTop = ({ children }) => {
  const location = useLocation();
  const navigationType = useNavigationType();

  useEffect(() => {
    // useNavigationType regular behavior = "PUSH".
    if (navigationType !== "POP") {
      window.scrollTo({
        top: 0,
        behavior: "instant",
      });
    }
    // Every time the location object changes it will call useEffect to trigger window.scrollTo.
  }, [location, navigationType]);

  return children;
};

export default ScrollTop;
