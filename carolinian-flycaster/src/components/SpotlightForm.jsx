import "./css/SpotlightForm.css";
import React, { useState } from "react";

const SpotlightForm = (props) => {
  const [result, setResult] = useState("");
  const [prevSrc, setPrevSrc] = useState("");
  const [prevSrc2, setPrevSrc2] = useState("");

  //fix so that the both boxes work uniquely!!
  const uploadImage = (event) => {
    //console.log(event.target.files[0]);
    setPrevSrc(URL.createObjectURL(event.target.files[0]));
  };
  const uploadImage2 = (event) => {
    //console.log(event.target.files[0]);
    setPrevSrc2(URL.createObjectURL(event.target.files[0]));
  };

  const addToServer = async (event) => {
    event.preventDefault(); //stops us from going to another page or refreshing
    setResult("Sending...");

    const formData = new FormData(event.target);
    console.log(...formData);

    const response = await fetch("https://cf-server-1bsr.onrender.com/api/spotlights", {
      method: "POST",
      body: formData,
    });

    if (response.status === 200) {
      setResult("Spotlight added successfully!");
      //event.target.reset();
      setTimeout(() => {
        props.closeAddDialog();
      }, 1500);
      props.updateSpotlights(await response.json());
    } else {
      const errorText = await response.text();
      console.error("Server Error:", errorText);
      setResult("Error adding spotlight!");
    }
  };

  return (
    <div id="submission-box" className="page-list-box submissions">
      <span id="x-button" onClick={props.closeAddDialog}>
        &times;
      </span>

      <form onSubmit={addToServer} id="form">
        <h3>Submit new Spotlight:</h3>
        <div id="spotlight-form-container" className="f-container">
          <section>
            <ul>
              <li>
                Name of Location:{" "}
                <input
                  id="locationname"
                  type="text"
                  name="name"
                  minLength="3"
                  required
                />
              </li>
              <li>
                Summary of Location:{" "}
                <input
                  id="summary"
                  type="text"
                  name="summary"
                  minLength="3"
                  required
                />
              </li>
              <li>
                Longitude of Location (Number):{" "}
                <input
                  id="longloc"
                  type="number"
                  name="longitude"
                  min="-1000000000000"
                  max="1000000000000"
                  step="0.000000001"
                  required
                />
              </li>
              <li>
                Latitude of Location (Number):{" "}
                <input
                  id="latloc"
                  type="number"
                  name="latitude"
                  min="-1000000000000"
                  max="1000000000000"
                  step="0.000000001"
                  required
                />
              </li>
              <li>
                Types of Fish Caught:{" "}
                <input
                  id="fishcaught"
                  type="text"
                  name="fishes"
                  minLength="3"
                  required
                />
              </li>
              <li>
                Types of Flies Used:{" "}
                <input
                  id="fliesused"
                  type="text"
                  name="flies"
                  minLength="3"
                  required
                />
              </li>
              <li>
                What Body of Water:{" "}
                <input
                  id="bodywatertype"
                  type="text"
                  name="watertype"
                  minLength="3"
                  required
                />
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
                  minLength="3"
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
                  minLength="3"
                  required
                />
              </li>
              <li>
                Image of River:
                <input
                  id="riverimage"
                  type="file"
                  accept="image/*"
                  name="outerimage"
                  onChange={uploadImage}
                  required
                />
                <div>
                  <p id="img-prev-section">
                    {prevSrc !== "" ? (
                      <img id="img-prev" src={prevSrc} alt="preview"></img>
                    ) : (
                      ""
                    )}
                  </p>
                </div>
              </li>
              <li>
                Image of Fishing Hole:
                <input
                  id="holeimage"
                  type="file"
                  accept="image/*"
                  name="innerimage"
                  onChange={uploadImage2}
                  required
                />
                <div>
                  <p id="img-prev-section">
                    {prevSrc2 !== "" ? (
                      <img id="img-prev" src={prevSrc2} alt="preview"></img>
                    ) : (
                      ""
                    )}
                  </p>
                </div>
              </li>
              <li>
                Best Season to Fish:{" "}
                <input
                  id="bestmonths"
                  type="text"
                  name="seasons"
                  minLength="3"
                  required
                />
              </li>
              <li></li>
            </ul>
          </section>
        </div>

        <span className="result-diag">{result}</span>

        <button id="btn-submit" type="submit">
          Submit Form
        </button>
      </form>
    </div>
  );
};

export default SpotlightForm;
