const Phone = (props) => {
  const phoneData = props.data;

  return (
    <div>
      <ul>
        <li>{phoneData.brand}</li>
        <li>{phoneData.model}</li>
      </ul>
    </div>
  );
};

export default Phone;
