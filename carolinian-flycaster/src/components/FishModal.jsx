import "./css/FishModal.css";

//react button help was from W3, stackform, and youtube
function FishModal(props) {
  const isVisible = props._id === props.selectedModalIdfish;

  return (
    <>
      <div id="modal-fish" className={`modal-style ${isVisible ? "" : "hide"}`}>
        <div className="modal-header">
          <span className="x-button" onClick={props.closeModalfish}>
            &times;
          </span>
        </div>
        <div className="modal-box-content">
          <img src={"https://cf-server-1bsr.onrender.com/images/"+props.innertopimage} alt={props.name}/>
          <h2>{props.name}</h2>
          <section className="f-container">
            <p>{props.summary}</p>
            <img src={"https://cf-server-1bsr.onrender.com/images/"+props.innerbottomimage} alt={props.name}/>
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
