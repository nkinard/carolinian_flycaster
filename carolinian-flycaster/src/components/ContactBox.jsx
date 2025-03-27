import "./css/ContactBox.css";

function ContactBox(props) {
    return (
        <section className="f-container">
            <img src={process.env.PUBLIC_URL + "/" + props.image} alt="contact source icon"/>
            <h3>{props.title}</h3>
            <p>{props.input}</p>
        </section>
    )
}

export default ContactBox;