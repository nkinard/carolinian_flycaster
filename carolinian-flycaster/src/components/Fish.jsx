import "./css/Fish.css";

function Fish(props) {
  return (
    <>
        <div id="galleryfish-item" onClick={props.onClick}>
            <section>
                <img src={process.env.PUBLIC_URL + "/" + props.outerimage} alt="fish"/>
                <h3>{props.name}</h3>
            </section>
        </div>
    </>
  );
}

export default Fish;
