import "./css/Spot.css";

function Spot(props) {
  
  return (
    <>
        <div id="gallery-item">
            <section>
                <img src={"https://cf-server-1bsr.onrender.com/images/"+props.outerimage} alt={props.name}/>
                <h3>{props.name}</h3>
            </section>
        </div>
    </>
  );
}

export default Spot;
