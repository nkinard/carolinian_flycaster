import "./css/Spot.css";
import DeleteSpotlight from "./DeleteSpotlight";
import EditSpotlight from "./EditSpotlight";
import { useState } from "react";

function Spot(props) {
  const [spotlight, setSpotlight] = useState(props);
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const [showEditDialog, setShowEditDialog] = useState(false);
  const [showSpotlight, setShowSpotlight] = useState(true);

  const openDeleteDialog = () => {
    setShowDeleteDialog(true);
  };

  const closeDeleteDialog = () => {
    setShowDeleteDialog(false);
  };

  const openEditDialog = () => {
    setShowEditDialog(true);
  };

  const closeEditDialog = () => {
    setShowEditDialog(false);
  };

  const hideSpotlight = () => {
    setShowSpotlight(false);
  };

  const editSpotlight = (updatedSpotlight) => {
    closeEditDialog();
    setSpotlight(updatedSpotlight);
    props.onUpdateSpotlight(updatedSpotlight);
  };
  
  return (
    <>
      {showSpotlight?(
        <div>
          {showDeleteDialog?(
            <DeleteSpotlight
            name={spotlight.name}
            _id={spotlight._id}
            closeDeleteDialog={closeDeleteDialog}
            hideSpotlight={hideSpotlight}
            />
          ):("")}

          {showEditDialog?(
               <EditSpotlight
               _id={spotlight._id}
               name={spotlight.name}
               summary={spotlight.summary}
               latitude={spotlight.latitude}
               longitude={spotlight.longitude}
               fishes={spotlight.fishes}
               flies={spotlight.flies}
               watertype={spotlight.watertype}
               typeofentry={spotlight.typeofentry}
               rating={spotlight.rating}
               innerimage={spotlight.innerimage}
               seasons={spotlight.seasons}
               outerimage={spotlight.outerimage}
               closeEditDialog = {closeEditDialog}
               editSpotlight = {editSpotlight}
             />
            ):("")}

          <section id="gallery-spot-item">
              <section className="spot-box" onClick={() => props.openModal(props._id)}>
                  <img src={"https://cf-server-1bsr.onrender.com/images/"+props.outerimage} alt={props.name}/>
                  <h3>{props.name}</h3>
              </section> 
              <section className="spot-buttons">
                <button className="spot-delete-button" onClick={openDeleteDialog}>Delete</button> 
                <button className="spot-edit-button" onClick={openEditDialog}>Edit</button>
              </section>
          </section>
        </div>
      ):("")}
    </>
  );
}

export default Spot;
