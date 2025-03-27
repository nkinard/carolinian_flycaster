import "./css/Header.css";
import Navigation from "./Navigation";

function Header() {
    return(
        <header>
            <section class="header-logo">
                <img src="images/live-oak.jpg" alt="logo"/>
                <h1>The Carolinian Flycaster</h1>
            </section>
            <Navigation />
        </header>
    );
};

export default Header;