import Styles from "./PhoneImage.module.css";

const PhoneImage = (props) => (
  <div className={Styles.PhoneImage}>
    <img src={props.image} alt={props.alt}></img>
  </div>
);

export default PhoneImage;
