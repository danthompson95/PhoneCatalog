import Styles from "./PhoneDetails.module.css";

//import Button from "../UI/Button/Button";

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

  /**
   * I commented out the click handler because it was unnecessary for now
   */

  // const clickHandler = async () => {
  //   if (window.confirm("Are you sure you want to delete this?")) {
  //     if (window.confirm("Are you REALLY sure you want to delete this?")) {
  //       // The code below works fine, but there is no way to refresh the database upon deletion

  //       /*const data = { id: props.data.id };

  //       const response = await fetch(
  //         "https://danthompsonphonecatalog.ew.r.appspot.com/deletePhone",
  //         {
  //           method: "POST",
  //           headers: {
  //             "Access-Control-Allow-Origin": "*",
  //             "Content-Type": "application/json",
  //           },
  //           body: JSON.stringify(data),
  //         }
  //       )
  //         .then((response) => response.text())
  //         .then((data) => {
  //           return data;
  //         })
  //         .catch((err) => {
  //           return err;
  //         });

  //       alert(response);
  //       window.location.reload();*/
  //       alert("This would delete the phone but is disabled for the examples");
  //     }
  //   }
  // };

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
        <div className={Styles.PhoneDetailsFooter}>
          {/*<Button clickEvent={clickHandler}>Delete Phone</Button>*/}
        </div>
      </div>
    </div>
  );
};

export default PhoneDetails;
