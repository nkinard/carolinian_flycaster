import "./css/Fly.css";

function Fly(props) {
  return (
    <>
        <div id="galleryfly-item" onClick={props.onClick}>
            <section>
                <img src={process.env.PUBLIC_URL + "/" + props.outerimage} alt="fly"/>
                <h3>{props.name}</h3>
            </section>
        </div>
    </>
  );
}

export default Fly;
