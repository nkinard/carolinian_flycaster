import "./css/SpotlightForm.css";
import React from "react";

function SpotlightForm() {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "32c21653-ffe5-472d-9d74-bc05ecbffe6b");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div id="submission-box" className="page-list-box submissions">
    <form onSubmit={onSubmit} id="form">
      <h3>Submit new Spotlight:</h3>
      <div id="spotlight-form-container" className="f-container">
        <section>
          <ul>
            <li>
              Name of Location:{" "}
              <input id="locationname" type="text" name="location" required />
            </li>
            <li>
              Longitude of Location:{" "}
              <input id="longloc" type="text" name="longitude" required />
            </li>
            <li>
              Latitude of Location:{" "}
              <input id="latloc" type="text" name="latitude" required />
            </li>
            <li>
              Types of Fish Caught:{" "}
              <input id="fishcaught" type="text" name="fish" required />
            </li>
            <li>
              Types of Flies Used:{" "}
              <input id="fliesused" type="text" name="flies" required />
            </li>
            <li>
              What Body of Water:{" "}
              <input id="bodywatertype" type="text" name="bodywater" required />
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
                name="entrytype"
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
              Image of River:
              <input
                id="riverimage"
                type="file"
                accept="image/*"
                name="imageriver"
                required
              />
            </li>
            <li>
              Image of Fishing Hole:
              <input
                id="holeimage"
                type="file"
                accept="image/*"
                name="imagehole"
                required
              />
            </li>
            <li>
              Best Season to Fish:{" "}
              <input id="bestmonths" type="text" name="season" required />
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
