import "./css/SpotModal.css";

function SpotModal(props) {
  let modalClass = props.modalVisible ? "modal-style" : "modal-style hide";

  return (
        <div id={props.id} className={modalClass}>
            <div className="modal-header">
                <span className="x-button" onClick={props.closeModal}>&times;</span>
            </div>
            <div className="modal-box-content">
                <img src={process.env.PUBLIC_URL + "/" + props.innerimage} alt="spotlight"/>
                <h2>{props.name} River Spotlight</h2>
                <section><p>{props.summary}</p></section>
                <section className="f-container">
                    <div>
                        <h2>Types of Flies and Fishes</h2>
                        <p>What Types of Flies: {props.flies}</p>
                        <p>What Types of Fishes: {props.fishes}</p>
                        <h2>Useful Information:</h2>
                        <p>What Body of Water: {props.watertype}</p>
                        <p>Public or Private Access: {props.typeofentry}</p>
                        <p>Best Season(s): {props.seasons}</p>
                        <h3>Final Rating: {props.rating}/5</h3>
                    </div>
                    <img src={process.env.PUBLIC_URL + "/" + props.iframe} alt="iframe box"/>
                </section>
            </div>
        </div>
  );
}

export default SpotModal;
