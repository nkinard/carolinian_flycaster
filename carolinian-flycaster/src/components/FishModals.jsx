import FishModal from "./FishModal";
import { useState , useEffect } from "react";
import axios from "axios";

const FishModals = ({ selectedModalIdfish, closeModalfish }) => {
  const [fishModals, setFishModals] = useState([]);

  //after page loaded to asynch json retrieval
  useEffect(()=>{
    //automatically execute the async function
    (async () => {
        //http://localhost:3001/api/spotlights
        //https://cf-server-1bsr.onrender.com/api/fishes
        const response = await axios.get("https://cf-server-1bsr.onrender.com/api/fishes"); //add link to json here
        setFishModals(response.data);
    })();
  },[]);

  return (
    <>
    <div id="fishModals">
      {fishModals.map((props)=>(
        <FishModal
            key={props.name}
            _id={props._id}
            name={props.name}
            summary={props.summary}
            outerimage={props.outerimage}
            innertopimage={props.innertopimage}
            innerbottomimage={props.innerbottomimage}
            useflies={props.useflies}
            topspots={props.topspots}
            selectedModalIdfish={selectedModalIdfish}
            closeModalfish={closeModalfish} 
        />
      ))}
    </div>
  </>
  );
}

export default FishModals;
