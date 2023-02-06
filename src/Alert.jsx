import { useEffect } from "react";

const Alert = ({ message, type, removeAlert, list }) => {
  useEffect(() => {
    let timeOut = setTimeout(() => {
      removeAlert();
    }, 3000);

    return () => {
      clearTimeout(timeOut);
    };
  }, [list]);

  return <p className={`alert alert-${type}`}>{message}</p>;
};

export default Alert;
