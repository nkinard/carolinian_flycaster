import "./css/Fly.css";

function Fly(props) {
  return (
    <>
        <div id="galleryfly-item" onClick={props.onClick}>
            <section>
                <img src={"https://cf-server-1bsr.onrender.com/images/"+props.outerimage} alt={props.name}/>
                <h3>{props.name}</h3>
            </section>
        </div>
    </>
  );
}

export default Fly;
