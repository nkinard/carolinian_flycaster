import "./css/AltParagraphBox.css";

function AltParagraphBox(props) {
    return (
        <>
            <div className="page-image-box">
                <img src={process.env.PUBLIC_URL + "/" + props.image} alt="step task"/>
            </div>
            <div className="page-paragraph-box-alternate">
                <h2>{props.title}</h2>
                <p>{props.topparagraph}</p>
                <p>{props.bottomparagraph}</p>
            </div>
        </>
    )
}

export default AltParagraphBox;