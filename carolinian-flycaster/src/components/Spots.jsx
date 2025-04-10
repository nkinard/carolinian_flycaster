import Spot from "./Spot";
import SpotModal from "./SpotModal";
import "./css/Spots.css";
import { useState, useEffect } from "react";
import axios from "axios";
import SpotlightForm from "./SpotlightForm";

const Spots = ({ onSpotClick, selectedModalId, closeModal }) => {
  const [spotlights, setSpotlights] = useState([]);
  const [spotlightModals, setSpotlightModals] = useState([]);

  const [showAddDialog, setShowAddDialog] = useState(false);
  const [buttonClassName, setButtonClassName] = useState("");

  //after page loaded to asynch json retrieval
  useEffect(() => {
    //automatically execute the async function
    (async () => {
      //http://localhost:3001/api/spotlights
      //https://cf-server-1bsr.onrender.com/api/spotlights
      const response = await axios.get("http://localhost:3001/api/spotlights"); //add link to json here
      setSpotlights(response.data);
      setSpotlightModals(response.data);
    })();
  }, []);

  const openAddDialog = () => {
    setShowAddDialog(true);
    setButtonClassName("hide");
  };

  const closeAddDialog = () => {
    console.log("I'm in the close method");
    setShowAddDialog(false);
    setButtonClassName("");
  };

  const updateSpotlights = (spotlightPlan) => {
    setSpotlights((spotlights) => [...spotlights, spotlightPlan]);
    setSpotlightModals((spotlightModals) => [...spotlightModals, spotlightPlan]);
  };

  return (
    <>
      <button
        id="add-spotlight"
        onClick={openAddDialog}
        className={buttonClassName}
      >
        Add a Spotlight!
      </button>

      {showAddDialog ? (
        <SpotlightForm
          closeAddDialog={closeAddDialog}
          updateSpotlights={updateSpotlights}
        />
      ) : (
        ""
      )}

      <div id="spotlights" className="f-container">
        {spotlights.map((props) => (
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

        <div id="spotlightModals">
          {spotlightModals.map((props) => (
            <SpotModal
              key={props.name + props.id}
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
      </div>
    </>
  );
};

export default Spots;
