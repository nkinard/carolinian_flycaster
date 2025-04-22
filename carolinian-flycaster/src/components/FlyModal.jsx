import "./css/FlyModal.css";

//react button help was from W3, stackform, and youtube
function FlyModal(props) {
  const isVisible = props._id === props.selectedModalIdfly;

  return (
    <>
        <div id="modal-fly" className={`modal-style ${isVisible ? "" : "hide"}`}>
            <div className="modal-header">
                <span className="x-button" onClick={props.closeModalfly}>&times;</span>
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
                        <h2>Main Purpose and Varieties</h2>
                        <p>{props.purpose}</p>
                        <h2>top Fish to Use Them For</h2>
                        <p>{props.topfish}</p>
                    </div>
                </section>
            </div>
        </div>
    </>
  );
}

export default FlyModal;
