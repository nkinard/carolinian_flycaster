import "./css/Spot.css";

function Spot(props) {
  
  return (
    <>
        <div id="gallery-item">
            <section>
                <img src={"http://localhost:3001/images/"+props.outerimage} alt={props.name}/>
                <h3>{props.name}</h3>
            </section>
        </div>
    </>
  );
}

export default Spot;
