import { useEffect, useState } from "react";

import Phone from "../../Components/Phone/Phone";

const PhonesHolder = () => {
  const [phoneData, setPhoneData] = useState([]);

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
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const phonesArray = Object.values(phoneData);
  const phones = phonesArray.map((phone) => (
    <Phone key={phone.id} data={phone} />
  ));

  return <div>{phones}</div>;
};

export default PhonesHolder;