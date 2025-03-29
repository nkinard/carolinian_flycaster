import "./css/Spot.css";

function Spot(props) {
  return (
    <>
        <div id="gallery-item" onClick={props.onClick}>
            <section>
                <img src={process.env.PUBLIC_URL + "/" + props.outerimage} alt="spotlight"/>
                <h3>{props.name}</h3>
            </section>
        </div>
    </>
  );
}

export default Spot;
