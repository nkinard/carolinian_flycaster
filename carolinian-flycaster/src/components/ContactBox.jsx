import "./css/ContactBox.css";

function ContactBox(props) {
    return (
        <section className="f-container contact-unique">
            <img src={process.env.PUBLIC_URL + "/" + props.image} alt="contact source icon"/>
            <p>{props.title}</p>
            <p>{props.input}</p>
        </section>
    )
}

export default ContactBox;