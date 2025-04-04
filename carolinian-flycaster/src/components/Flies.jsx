import Fly from "./Fly"
import { useState , useEffect } from "react";
import axios from "axios";


const Flies = ({onSpotClickfly}) => {
  const [flies, setFlies] = useState([]);

  //after page loaded to asynch json retrieval
  useEffect(()=>{
    //automatically execute the async function
    (async () => {
        const response = await axios.get("https://cf-server-1bsr.onrender.com/api/flies"); //add link to json here
        setFlies(response.data);
    })();

  },[]);

  return (
    <>
      <div id="flies" className="f-container">
        {flies.map((props)=>(
          <div key={props.id} onClick={() => onSpotClickfly(props.id)}>
            <Fly
              id={props.id}
              name={props.name}
              summary={props.summary}
              outerimage={props.outerimage}
              innertopimage={props.innertopimage}
              innerbottomimage={props.innerbottomimage}
              purpose={props.purpose}
              topfish={props.topfish}/>
          </div>
        ))}
      </div>
    </>
  );
};

export default Flies;