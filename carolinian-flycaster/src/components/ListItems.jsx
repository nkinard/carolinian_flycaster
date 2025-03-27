import "./css/ListItems.css";

function ListItems(props) {
    return (
        <section className="ListItems">
            <img src={process.env.PUBLIC_URL + "/" + props.image} alt="button"/>
            <p>{props.paragraph}</p>
        </section>
    )
}

export default ListItems;