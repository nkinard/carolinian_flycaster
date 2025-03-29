import "./css/FishModal.css";

//react button help was from W3, stackform, and youtube
function FishModal(props) {
  let modalClass = props.modalVisible ? "modal-style" : "modal-style hide";

  return (
    <>
      <div id="modal-fish" className={modalClass}>
        <div className="modal-header">
          <span className="x-button" onClick={props.closeModal}>
            &times;
          </span>
        </div>
        <div className="modal-box-content">
          <img
            src={process.env.PUBLIC_URL + "/" + props.innertopimage}
            alt="fish"
          />
          <h2>{props.name}</h2>
          <section className="f-container">
            <p>{props.summary}</p>
            <img
              src={process.env.PUBLIC_URL + "/" + props.innerbottomimage}
              alt="fish"
            />
          </section>
          <section className="f-container">
            <div>
              <h2>What Flies to Use</h2>
              <p>{props.useflies}</p>
              <h2>Top Spots to Find Them</h2>
              <p>{props.topspots}</p>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default FishModal;
