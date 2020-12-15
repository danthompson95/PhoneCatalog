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
    <div className={Styles.PhoneDetails} onClick={() => props.closeModal(true)}>
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
          <div className={Styles.PhoneDetailsHolder}>
            <h4 className={Styles.PhoneDetailsCategory}>Weight</h4>
            <p>{props.data.weight}g</p>
          </div>
          <div className={Styles.PhoneDetailsHolder}>
            <h4 className={Styles.PhoneDetailsCategory}>Release Year</h4>
            <p>{props.data.releaseYear}</p>
          </div>
          <div className={Styles.PhoneDetailsHolder}>
            <h4 className={Styles.PhoneDetailsCategory}>Display</h4>
            <p>{props.data.display}</p>
          </div>
          <div className={Styles.PhoneDetailsHolder}>
            <h4 className={Styles.PhoneDetailsCategory}>Screen Size</h4>
            <p>{props.data.screenSize}inches</p>
          </div>
          <div className={Styles.PhoneDetailsHolder}>
            <h4 className={Styles.PhoneDetailsCategory}>Front Camera</h4>
            <ul className={Styles.PhoneDetailsList}>{frontCameraList}</ul>
          </div>
          <div className={Styles.PhoneDetailsHolder}>
            <h4 className={Styles.PhoneDetailsCategory}>Rear Camera</h4>
            <ul className={Styles.PhoneDetailsList}>{rearCameraList}</ul>
          </div>
          <div className={Styles.PhoneDetailsHolder}>
            <h4 className={Styles.PhoneDetailsCategory}>MP3 Jack</h4>
            <p>{props.data.jack ? "true" : "false"}</p>
          </div>
          <div className={Styles.PhoneDetailsHolder}>
            <h4 className={Styles.PhoneDetailsCategory}>Expandable Memory</h4>
            <p>{props.data.memory.expandable ? "true" : "false"}</p>
          </div>
          <div className={Styles.PhoneDetailsHolder}>
            <h4 className={Styles.PhoneDetailsCategory}>Internal Memory</h4>
            <ul className={Styles.PhoneDetailsList}>{internalMemoryList}</ul>
          </div>
          <div className={Styles.PhoneDetailsHolder}>
            <h4 className={Styles.PhoneDetailsCategory}>Colors</h4>
            <ul className={Styles.PhoneDetailsList}>{colorsList}</ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhoneDetails;
