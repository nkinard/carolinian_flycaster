import "./css/ParagraphBox.css";

function ParagraphBox(props) {
  return (
    <>
      <div className="page-paragraph-content paragraph-color">
        <section className="f-container">
          <div className="page-paragraph-box">
            <h2>{props.title}</h2>
            <p>{props.topparagraph}</p>
            <p>{props.bottomparagraph}</p>
          </div>
          <div className="page-image-box">
            <img
              src={process.env.PUBLIC_URL + "/" + props.image}
              alt="step task"
            />
          </div>
        </section>
      </div>
    </>
  );
}

export default ParagraphBox;
