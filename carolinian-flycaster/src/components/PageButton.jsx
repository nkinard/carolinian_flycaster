import "./css/PageButton.css";

function PageButton(props) {
  return (
    <div className="page-buttons-stack">
      <section className="f-container four-img-stack">
        <div className="page-button-block">
          <img src={process.env.PUBLIC_URL + "/" + props.image1} alt="button" />
          <h3>{props.name1}</h3>
        </div>
        <div className="page-button-block">
          <img src={process.env.PUBLIC_URL + "/" + props.image2} alt="button" />
          <h3>{props.name2}</h3>
        </div>
        <div className="page-button-block">
          <img src={process.env.PUBLIC_URL + "/" + props.image3} alt="button" />
          <h3>{props.name3}</h3>
        </div>
        <div className="page-button-block">
          <img src={process.env.PUBLIC_URL + "/" + props.image4} alt="button" />
          <h3>{props.name4}</h3>
        </div>
      </section>
    </div>
  );
}

export default PageButton;
