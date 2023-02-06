

const Alert = ({message,type}) => {
  return (
    <p className={`alert alert-${type}`}>
      {message}
    </p>
  );
}

export default Alert;
