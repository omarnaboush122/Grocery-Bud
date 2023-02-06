import { useEffect } from "react";


const Alert = ({message,type,removeAlert}) => {

  useEffect(()=> {
    let timeOut = setTimeout(()=> {
      removeAlert();
    },3000)

    return () => {
      clearTimeout(timeOut);
    }
  },[])
  
  return (
    <p className={`alert alert-${type}`}>
      {message}
    </p>
  );
}

export default Alert;
