import Spot from "./Spot"
import { useState } from "react";
import axios from "axios";


function Spots(props) {
  const [spotlights, setSpotlights] = useState([]);

  return (
    <div id="spots">
        {spotlights.map(()=>(
            <Spot />
        ))}
        
    </div>
  );
}

export default Spots;
