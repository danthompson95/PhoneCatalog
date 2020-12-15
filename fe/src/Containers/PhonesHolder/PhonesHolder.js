import { useEffect, useState } from "react";

import Phone from "../../Components/Phone/Phone";
import Spinner from "../../Components/UI/Spinner/Spinner";

import Styles from "./PhonesHolder.module.css";

const PhonesHolder = () => {
  const [phoneData, setPhoneData] = useState([]);
  const [dataLoaded, setDataLoaded] = useState(false);

  useEffect(() => {
    const requestOptions = {
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    };

    fetch("http://localhost:8080/phones", requestOptions)
      .then((response) => response.json())
      .then((data) => {
        setPhoneData(data);
        setDataLoaded(true);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const phonesArray = Object.values(phoneData);
  const phones = phonesArray.map((phone) => (
    <Phone key={phone.id} data={phone} />
  ));

  const loaded = dataLoaded ? phones : <Spinner />;

  return <div className={Styles.PhonesHolder}>{loaded}</div>;
};

export default PhonesHolder;
