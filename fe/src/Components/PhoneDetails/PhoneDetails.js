import Styles from "./PhoneDetails.module.css";

const PhoneDetails = (props) => {
  const colors = props.data.colors;
  const colorsList = colors.map((color) => <li key={color}>{color}</li>);

  const frontCamera = props.data.cameraFront;
  const frontCameraList = frontCamera.map((camera) => (
    <li key={camera}>{camera}</li>
  ));

  const rearCamera = props.data.cameraRear;
  const rearCameraList = rearCamera.map((camera) => (
    <li key={camera}>{camera}</li>
  ));

  const internalMemory = props.data.memory.internal;
  const internalMemoryList = internalMemory.map((memory) => (
    <li key={memory}>{memory}</li>
  ));

  return (
    <div className={Styles.PhoneDetails}>
      <div className={Styles.PhoneDetailsContent}>
        <div className={Styles.PhoneDetailsHeader}>
          <span
            className={Styles.PhoneDetailsClose}
            onClick={() => props.closeModal(true)}
          >
            &times;
          </span>
          <h2>{`${props.data.brand} ${props.data.model}`}</h2>
        </div>
        <div className={Styles.PhoneDetailsBody}>
          <p>Weight: {props.data.weight}g</p>
          <p>Release Year: {props.data.releaseYear}</p>
          <p>Display: {props.data.display}</p>
          <p>Screen Size: {props.data.screenSize}</p>
          <p>Front Camera:</p>
          <ul>{frontCameraList}</ul>
          <p>Rear Camera:</p>
          <ul>{rearCameraList}</ul>
          <p>MP3 Jack: {props.data.jack}</p>
          <p>Expandable Memory: {props.data.memory.expandable}</p>
          <p>Internal Memory:</p>
          <ul>{internalMemoryList}</ul>
          <p>Colors:</p>
          <ul>{colorsList}</ul>
        </div>
        <div className={Styles.PhoneDetailsFooter}></div>
      </div>
    </div>
  );
};

export default PhoneDetails;
