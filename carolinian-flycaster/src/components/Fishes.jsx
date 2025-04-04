import Fish from "./Fish"
import { useState , useEffect } from "react";
import axios from "axios";


const Fishes = ({onSpotClickfish}) => {
  const [fishes, setFishes] = useState([]);

  //after page loaded to asynch json retrieval
  useEffect(()=>{
    //automatically execute the async function
    (async () => {
        const response = await axios.get("https://cf-server-1bsr.onrender.com/api/fishes"); //add link to json here
        setFishes(response.data);
    })();

  },[]);

  return (
    <>
      <div id="fishes" className="f-container">
        {fishes.map((props)=>(
          <div key={props.id} onClick={() => onSpotClickfish(props.id)}>
            <Fish
              id={props.id}
              name={props.name}
              summary={props.summary}
              outerimage={props.outerimage}
              innertopimage={props.innertopimage}
              innerbottomimage={props.innerbottomimage}
              useflies={props.useflies}
              topspots={props.topspots}/>
          </div>
        ))}
      </div>
    </>
  );
};

export default Fishes;