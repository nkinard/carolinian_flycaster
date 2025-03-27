import "./css/PageButton.css";

function PageButton(props) {
    return (
        <div className="page-button-block">
            <img src={process.env.PUBLIC_URL + "/" + props.image} alt="button"/>
            <h3>{props.name}</h3>
        </div>
    )
}

export default PageButton;