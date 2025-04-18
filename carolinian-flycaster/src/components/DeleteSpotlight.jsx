import "./css/DialoguePopUp.css"
import React, { useState } from "react";

const DeleteSpotlight = (props) => {
    const [result, setResult] = useState("");


    const deleteSpot = async() => {
        //console.log(`https://cf-server-1bsr.onrender.com/api/spotlights/${props.id}`);
        console.log("Deleting spotlight with ID:", props.id);
        const response = await fetch(`https://cf-server-1bsr.onrender.com/api/spotlights/${props.id}`,{
            method:"DELETE"
          });

        if(response.status === 200){
            setResult("The Spotlight was deleted successfully");
            props.closeDeleteDialog();
            props.hideSpotlight();
        } else {
            setResult("Sorry, this action was unable to completed at this time")
        }
    };

    return (
        <div id="entire-box">
            <div className="container">
                <div id="container-content">
                    <h3>Would you like to delete {props.name}?</h3>
                    <section>
                        <button id="diag-button" onClick = {props.closeDeleteDialog}>No</button>            
                        <button id="diag-button" onClick={deleteSpot}>Yes</button>
                    </section>
                    <span>{result}</span>
                </div>
            </div>
        </div>
    )

};

export default DeleteSpotlight;