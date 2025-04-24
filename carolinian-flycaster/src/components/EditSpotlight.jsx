import React, { useState } from "react";
import "./css/DialoguePopUp.css";

const EditSpotlight = (props) => {
  const [result, setResult] = useState("");
  const [prevSrc, setPrevSrc] = useState("");
  const [prevSrc2, setPrevSrc2] = useState("");

  const [editIMG, seteditIMG] = useState({});
  const [editIMG2, seteditIMG2] = useState({});

  //code help from W3 and some stackflow for the image changes
  const imageChange1 = (event) => {
    const name = event.target.name;
    const value = event.target.files[0];
    console.log(value);
    seteditIMG((values) => ({ ...values, [name]: value }));
    console.log(editIMG);
    // Directly update the preview source in editIMG state
    if (value) {
      seteditIMG((prevValues) => ({ ...prevValues, previewUrl: URL.createObjectURL(value) }));
    } else {
      seteditIMG((prevValues) => ({ ...prevValues, previewUrl: null }));
    }
  };

  const imageChange2 = (event) => {
    const name = event.target.name;
    const value = event.target.files[0];
    seteditIMG2((values) => ({ ...values, [name]: value }));
    // Directly update the preview source in editIMG2 state
    if (value) {
      seteditIMG2((prevValues) => ({ ...prevValues, previewUrl: URL.createObjectURL(value) }));
    } else {
      seteditIMG2((prevValues) => ({ ...prevValues, previewUrl: null }));
    }
  };

  const onSubmit = async (event) => {
    console.log("Editing spotlight with ID:", props._id);
    console.log(props.name);
    event.preventDefault();
    setResult("Sending...");

    const formData = new FormData(event.target);
    console.log(...formData);

    //http://localhost:3001/api/houses/${props._id}
    const response = await fetch(
      `https://cf-server-1bsr.onrender.com/api/spotlights/${props._id}`,
      {
        method: "PUT",
        body: formData,
      }
    );

    if (response.status === 200) {
      setResult("Spotlight editted successfully");
      event.target.reset();
      props.closeEditDialog();
      props.editSpotlight(await response.json());
    } else {
      setResult("Error editting your spotlight");
    }
  };

  //fix so that the both boxes work uniquely!!
  const uploadImage = (event) => {
    //console.log(event.target.files[0]);
    setPrevSrc(URL.createObjectURL(event.target.files[0]));
  };
  const uploadImage2 = (event) => {
    //console.log(event.target.files[0]);
    setPrevSrc2(URL.createObjectURL(event.target.files[0]));
  };

  return (
    <>
      <div id="entire-box">
        <div className="container">
          <div id="container-content">
            <section>
              <span id="x-button" onClick={props.closeEditDialog}>
                &times;
              </span>

              <form onSubmit={onSubmit} id="edit-form">
                <h3>Edit Spotlight:</h3>
                <div id="spotlight-edit-container" className="edit-container">
                  <section>
                    <ul>
                      <li>
                        Name of Location:{" "}
                        <input
                          id="locationname"
                          type="text"
                          name="name"
                          minLength="3"
                          defaultValue={props.name}
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
                          defaultValue={props.summary}
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
                          defaultValue={props.longitude}
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
                          defaultValue={props.latitude}
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
                          defaultValue={props.fishes}
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
                          defaultValue={props.flies}
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
                          defaultValue={props.watertype}
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
                          defaultValue={props.typeofentry}
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
                          defaultValue={props.rating}
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
                          onChange={imageChange1}
                        />
                        <div>
                          <p id="img-prev-section">
                            <img
                              id="img-prev"
                              src={editIMG.previewUrl ? editIMG.previewUrl
                                : `https://cf-server-1bsr.onrender.com/images/${props.outerimage}`}
                              alt=""                      
                            />
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
                          onChange={imageChange2}
                        />
                        <div>
                        <p id="img-prev-section">
                            <img
                              id="img-prev"
                              src={editIMG2.previewUrl ? editIMG2.previewUrl
                                : `https://cf-server-1bsr.onrender.com/images/${props.innerimage}`
                              } alt=""                            
                            />
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
                          defaultValue={props.seasons}
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
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditSpotlight;
