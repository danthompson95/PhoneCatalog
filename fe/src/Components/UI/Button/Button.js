const Button = (props) => {
  return (
    <button onClick={props.clickEvent} type="button">
      {props.children}
    </button>
  );
};

export default Button;
