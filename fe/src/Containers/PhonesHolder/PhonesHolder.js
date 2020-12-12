import { useEffect, useState } from "react";

const PhonesHolder = () => {
  const [phoneData, setPhoneData] = useState([]);
  const [dataError, setErrorData] = useState([]);

  useEffect(() => {
    const requestOptions = {
      method: "GET",
      mode: "cors",
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
      redirect: "follow",
    };

    fetch("http://localhost:8080/phones", requestOptions)
      .then((response) => response.json())
      .then((data) => {
        setPhoneData(data);
      })
      .catch((err) => {
        setErrorData(err);
      });
  }, []);

  console.log(phoneData);

  return <div>hello</div>;
};

export default PhonesHolder;
