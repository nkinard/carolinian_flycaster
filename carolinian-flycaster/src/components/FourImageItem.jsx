import "./css/FourImageItem.css";

function FourImageItem(props) {
  return (
    <>
      <div className="guidepage-img-box">
          <section className="f-container four-img-block">
            <div className="four-image-box">
              <img src={process.env.PUBLIC_URL + "/" + props.image1} alt="image-button-guide" />
            </div>
            <div className="four-image-box">
              <img
                src={process.env.PUBLIC_URL + "/" + props.image2}
                alt="image-button-library"
              />
            </div>
            <div className="four-image-box">
              <img src={process.env.PUBLIC_URL + "/" + props.image3} alt="image-button-guide" />
            </div>
            <div className="four-image-box">
              <img
                src={process.env.PUBLIC_URL + "/" + props.image4}
                alt="image-button-library"
              />
            </div>
          </section>
        </div>
    </>
  );
}

export default FourImageItem;
