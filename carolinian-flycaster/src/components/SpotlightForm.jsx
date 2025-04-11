import "./css/SpotlightForm.css";
import React, { useState } from "react";

const SpotlightForm = (props) => {
  const [result, setResult] = useState("");
  const [prevSrc, setPrevSrc] = useState("");
  const [prevSrc2, setPrevSrc2] = useState(""); 

  const [dimError1, setdimError1] = useState("");
  const [dimError2, setdimError2] = useState("");

  const width1 = 300;
  const height1 = 200;
  const width2 = 900;
  const height2 = 400;


  //code help from a combo of w3, stackflow, youtube, and AI tools
  const checkImgSize = (event, setError, setPreviewSrc, width, height) => {
    const file = event.target.files[0];
    setError("");
    setPreviewSrc("");

    if (file) {
      let checker = false;
      const reader = new FileReader();
      reader.onload = (e) => {
        const img = new Image();
        img.onload = () => {
          if (img.width === width && img.height === height) {
            setPreviewSrc(img.src);
          } else {
            setError(`Image must be exactly ${width}x${height} pixels.`);
            event.target.value = null; // Clear file input
          }
        };
        img.onerror = () => {
          setError("Error loading image.");
          event.target.value = null; // Clear file input
        };
        img.src = e.target.result;

        return checker;
      };
      reader.readAsDataURL(file);
    }
  };

  //fix so that the both boxes work uniquely!!
  const uploadImage = (event) => {
    //console.log(event.target.files[0]);
    checkImgSize(event, setdimError1, setPrevSrc, width1, height1);
  };
  const uploadImage2 = (event) => {
    //console.log(event.target.files[0]);
    checkImgSize(event, setdimError2, setPrevSrc2, width2, height2);
  };

  const addToServer = async(event) => {
    event.preventDefault(); //stops us from going to another page or refreshing
    setResult("Sending...");

    if (dimError1 || dimError2) {
      setResult("Please correct the image dimension errors.");
      return;
    }

    const formData = new FormData(event.target);
    console.log(...formData);

    const response = await fetch("https://cf-server-1bsr.onrender.com/api/spotlights", {
      "method":"POST",
      "body":formData
    });

    if(response.status === 200){
      setResult("Spotlight added successfully!")
      event.target.reset();
      props.closeAddDialog();
      props.updateSpotlights(await response.json());
    } else {
      const errorText = await response.text();
      console.error("Server Error:", errorText);
      setResult("Error adding spotlight!");
    };
  };

  return (
    <div id="submission-box" className="page-list-box submissions">
    <span id="x-button" onClick={props.closeAddDialog}>&times;</span>

    <form onSubmit={addToServer} id="form">
      <h3>Submit new Spotlight:</h3>
      <div id="spotlight-form-container" className="f-container">
        <section>
          <ul>
            <li>
              Name of Location:{" "}
              <input id="locationname" type="text" name="name" required />
            </li>
            <li>
              Summary of Location:{" "}
              <input id="summary" type="text" name="summary" required />
            </li>
            <li>
              Longitude of Location (Number):{" "}
              <input id="longloc" type="number" name="longitude" required />
            </li>
            <li>
              Latitude of Location (Number):{" "}
              <input id="latloc" type="number" name="latitude" required />
            </li>
            <li>
              Types of Fish Caught:{" "}
              <input id="fishcaught" type="text" name="fishes" required />
            </li>
            <li>
              Types of Flies Used:{" "}
              <input id="fliesused" type="text" name="flies" required />
            </li>
            <li>
              What Body of Water:{" "}
              <input id="bodywatertype" type="text" name="watertype" required />
            </li>
          </ul>
        </section>
        <section>
          <ul>
            <li>
              Public or Private Entry:
              <input
                id="publicoprivate"
                type="text"
                name="typeofentry"
                required
              />
            </li>
            <li>
              Overall Rating:
              <input
                id="rating"
                type="number"
                max="5"
                min="1"
                name="rating"
                required
              />
            </li>
            <li>
              Image of River (Image dimensions must be 300x200):
              <input
                id="riverimage"
                type="file"
                accept="image/*"
                name="outerimage"
                onChange={uploadImage}
                required
              />
              <div>
                {dimError1 && <p className="error-message">{dimError1}</p>}
                <p id="img-prev-section">
                  {prevSrc!==""?
                  (<img id="img-prev" src={prevSrc} alt="preview"></img>):
                  ("")
                  }
                </p>
              </div>
            </li>
            <li>
              Image of Fishing Hole (Image dimensions must be 900x400):
              <input
                id="holeimage"
                type="file"
                accept="image/*"
                name="innerimage"
                onChange={uploadImage2}
                required
              />
              <div>
                {dimError2 && <p className="error-message">{dimError2}</p>}
                <p id="img-prev-section">
                  {prevSrc2!==""?
                  (<img id="img-prev" src={prevSrc2} alt="preview"></img>):
                  ("")
                  }
                </p>
              </div>
            </li>
            <li>
              Best Season to Fish:{" "}
              <input id="bestmonths" type="text" name="seasons" required />
            </li>
            <li></li>
          </ul>
        </section>
      </div>

      <span className="result-diag">{result}</span>

      <button id="btn-submit" type="submit">Submit Form</button>
    </form>
    </div>
  );
}

export default SpotlightForm;
