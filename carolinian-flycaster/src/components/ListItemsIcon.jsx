import "./css/ListItemsIcon.css";

function ListItemsIcon(props) {
    return (
        <div className="page-list-box">
            <h3>{props.title}</h3>
            <ul>
                <li className="ListItems">
                    <img src={process.env.PUBLIC_URL + "/" + props.image1} alt="button"/>
                    <p>{props.paragraph1}</p>
                </li>
                <li className="ListItems">
                    <img src={process.env.PUBLIC_URL + "/" + props.image2} alt="button"/>
                    <p>{props.paragraph2}</p>
                </li>
                <li className="ListItems">
                    <img src={process.env.PUBLIC_URL + "/" + props.image3} alt="button"/>
                    <p>{props.paragraph3}</p>
                </li>
            </ul>
        </div>
    )
}

export default ListItemsIcon;