import "./css/SpotModal.css";

function SpotModal(props) { 
  const isVisible = props._id === props.selectedModalId;

  const getMap = `https://maps.google.com/maps?q=${props.latitude},${props.longitude}&output=embed`;

  return (
        <div className={`modal-style ${isVisible ? "" : "hide"}`}>
            <div className="modal-header">
                <span className="x-button" onClick={props.closeModal}>&times;</span>
            </div>
            <div className="modal-box-content">
                <section>
                    <div className="inner-image-box">
                        <img src={"https://cf-server-1bsr.onrender.com/images/"+props.innerimage} alt={props.name}/>
                    </div>
                </section>
                <h2>{props.name} River Spotlight</h2>
                <section><p>{props.summary}</p></section>
                <section id="spot-body">
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
                    <iframe src={getMap} title="Google Map"></iframe>
                </section>
            </div>
        </div>
  );

}

export default SpotModal;
