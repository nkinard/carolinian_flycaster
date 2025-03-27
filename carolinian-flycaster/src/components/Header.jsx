import "./css/Header.css";
import Navigation from "./Navigation";

function Header() {
    return(
        <header>
            <section className="header-logo">
                <img src={process.env.PUBLIC_URL + "/images/logo.png"} alt="logo"/>
                <h1>The Carolinian Flycaster</h1>
            </section>
            <Navigation />
        </header>
    );
};

export default Header;