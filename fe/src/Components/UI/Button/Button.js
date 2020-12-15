import Styles from "./Button.module.css";

const Button = (props) => (
  <button className={Styles.Button} onClick={props.clickEvent} type="button">
    {props.children}
  </button>
);

export default Button;
