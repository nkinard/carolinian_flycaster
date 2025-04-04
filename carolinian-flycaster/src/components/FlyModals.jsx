import FlyModal from "./FlyModal";
import { useState , useEffect } from "react";
import axios from "axios";

const FlyModals = ({ selectedModalIdfly, closeModalfly }) => {
  const [flyModals, setFlyModals] = useState([]);

  //after page loaded to asynch json retrieval
  useEffect(()=>{
    //automatically execute the async function
    (async () => {
        const response = await axios.get("https://cf-server-1bsr.onrender.com/api/flies"); //add link to json here
        setFlyModals(response.data);
    })();
  },[]);

  return (
    <>
    <div id="flyModals">
      {flyModals.map((props)=>(
        <FlyModal
            key={props.id}
            id={props.id}
            name={props.name}
            summary={props.summary}
            outerimage={props.outerimage}
            innertopimage={props.innertopimage}
            innerbottomimage={props.innerbottomimage}
            topfish={props.topfish}
            purpose={props.purpose}
            selectedModalIdfly={selectedModalIdfly}
            closeModalfly={closeModalfly} 
        />
      ))}
    </div>
  </>
  );
}

export default FlyModals;
