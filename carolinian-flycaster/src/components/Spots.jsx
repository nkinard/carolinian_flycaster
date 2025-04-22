import Spot from "./Spot";
import SpotModal from "./SpotModal";
import "./css/Spots.css";
import { useState, useEffect } from "react";
import axios from "axios";
import SpotlightForm from "./SpotlightForm";

const Spots = () => {
  const [spotlights, setSpotlights] = useState([]);
  const [spotlightModals, setSpotlightModals] = useState([]);

  const [selectedModalId, setSelectedModalId] = useState(null);

  const [showAddDialog, setShowAddDialog] = useState(false);
  const [buttonClassName, setButtonClassName] = useState("");

  //after page loaded to asynch json retrieval
  useEffect(() => {
    //automatically execute the async function
    (async () => {
      //http://localhost:3001/api/spotlights
      //https://cf-server-1bsr.onrender.com/api/spotlights
      const response = await axios.get("https://cf-server-1bsr.onrender.com/api/spotlights"); //add link to json here
      setSpotlights(response.data);
      setSpotlightModals(response.data);
    })();
  }, []);

  const openModal = (_id) => {
    setSelectedModalId(_id);
  };

  const closeModal = () => {
    setSelectedModalId(null);
  };  

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

  //code help from stackflow and W3 to make it auto
  const updateExistingSpotlight = (updatedSpotlight) => {
    setSpotlights((prevSpotlights) =>
      prevSpotlights.map((spot) =>
        spot._id === updatedSpotlight._id ? updatedSpotlight : spot
      )
    );
    setSpotlightModals((prevSpotlightModals) =>
      prevSpotlightModals.map((modal) =>
        modal._id === updatedSpotlight._id ? updatedSpotlight : modal
      )
    );
  };

  return (
    <>
      <div>
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
              <Spot
                key={props.name}
                _id={props._id}
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
                openModal={openModal}
                onUpdateSpotlight={updateExistingSpotlight}
              />
          ))}

          <div id="spotlightModals">
            {spotlightModals.map((props) => (
              <SpotModal
                key={props.name}
                _id={props._id}
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
      </div>
    </>
  );
};

export default Spots;
