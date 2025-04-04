import "./css/Fish.css";

function Fish(props) { 
  return (
    <>
        <div id="galleryfish-item" onClick={props.onClick}>
            <section>
            <img src={"https://cf-server-1bsr.onrender.com/images/"+props.outerimage} alt={props.name}/>
            <h3>{props.name}</h3>
            </section>
        </div>
    </>
  );
}

export default Fish;
