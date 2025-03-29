import "./css/FlyModal.css";

//react button help was from W3, stackform, and youtube
function FlyModal(props) {
  let modalClass = props.modalVisible ? "modal-style" : "modal-style hide";

  return (
    <>
        <div id="modal-fly" className={modalClass}>
            <div className="modal-header">
                <span className="x-button" onClick={props.closeModal}>&times;</span>
            </div>
            <div className="modal-box-content">
                <img src={process.env.PUBLIC_URL + "/" + props.innertopimage} alt="fish"/>
                <h2>{props.name}</h2>
                <section className="f-container">
                    <p>{props.summary}</p>
                    <img src={process.env.PUBLIC_URL + "/" + props.innerbottomimage} alt="fish"/>
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
