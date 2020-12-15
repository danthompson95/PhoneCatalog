import { useState } from "react";

import PhoneImage from "../PhoneImage/PhoneImage";
import Button from "../UI/Button/Button";

import PhoneDetails from "../PhoneDetails/PhoneDetails";

import Styles from "./Phone.module.css";

const Phone = (props) => {
  const [phoneDetails, setPhoneDetails] = useState(false);

  const phoneData = props.data;

  const handleButtonClick = () => {
    setPhoneDetails(true);
  };

  const handleCloseModal = () => {
    setPhoneDetails(false);
  };

  return (
    <div className={Styles.Phone}>
      <ul>
        <PhoneImage
          image={phoneData.image}
          alt={`${phoneData.brand} ${phoneData.model}`}
        />
        <li>{phoneData.brand}</li>
        <li>{phoneData.model}</li>
        {phoneDetails ? (
          <PhoneDetails data={phoneData} closeModal={handleCloseModal} />
        ) : null}
        <Button clickEvent={handleButtonClick}>View More</Button>
      </ul>
    </div>
  );
};

export default Phone;
