import "./css/ListItems.css";

function ListItems(props) {
    return (
        <div className="page-list-box">
            <h3>{props.title}</h3>
            <ul>
                <li className="ListItems">
                    <p>{props.paragraph1}</p>
                </li>
                <li className="ListItems">
                    <p>{props.paragraph2}</p>
                </li>
                <li className="ListItems">
                    <p>{props.paragraph3}</p>
                </li>
                <li className="ListItems">
                    <p>{props.paragraph4}</p>
                </li>
                <li className="ListItems">
                    <p>{props.paragraph5}</p>
                </li>
                <li className="ListItems">
                    <p>{props.paragraph6}</p>
                </li>
                <li className="ListItems">
                    <p>{props.paragraph7}</p>
                </li>
            </ul>
        </div>
    )
}

export default ListItems;