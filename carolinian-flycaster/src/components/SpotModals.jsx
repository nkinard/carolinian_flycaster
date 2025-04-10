import SpotModal from "./SpotModal";
import { useState , useEffect } from "react";
import axios from "axios";

const SpotModals = ({ selectedModalId, closeModal }) => {
  const [spotlightModals, setSpotlightModals] = useState([]);

  //after page loaded to asynch json retrieval
  useEffect(()=>{
    //automatically execute the async function
    (async () => {
        const response = await axios.get("http://localhost:3001/api/spotlights"); //add link to json here
        setSpotlightModals(response.data);
    })();
  },[]);

  return (
    <>
    <div id="spotlightModals">
      {spotlightModals.map((props)=>(
        <SpotModal
          key={props.name+props.id}
          id={props.id}
          name={props.name}
          summary={props.summary}
          latitude={props.latitude}
          longitude={props.longitude}
          fishes={props.fishes}
          flies={props.flies}
          watertype={props.watertype}
          typeofentry={props.typeofentry}
          rating={props.rating}
          innerimage={props.innerimage}
          seasons={props.seasons}
          outerimage={props.outerimage}
          selectedModalId={selectedModalId}
          closeModal={closeModal} 
        />
      ))}
    </div>
  </>
  );
}

export default SpotModals;
