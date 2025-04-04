import Spot from "./Spot"
import { useState , useEffect } from "react";
import axios from "axios";


const Spots = ({onSpotClick}) => {
  const [spotlights, setSpotlights] = useState([]);

  //after page loaded to asynch json retrieval
  useEffect(()=>{
    //automatically execute the async function
    (async () => {
        const response = await axios.get("https://cf-server-1bsr.onrender.com/api/spotlights"); //add link to json here
        setSpotlights(response.data);
    })();

  },[]);


  return (
    <>
      <div id="spotlights" className="f-container">
        {spotlights.map((props)=>(
          <div key={props.id} onClick={() => onSpotClick(props.id)}>
            <Spot
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
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default Spots;
