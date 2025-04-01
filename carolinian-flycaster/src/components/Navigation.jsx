import './css/Navigation.css';
import {Link} from "react-router-dom";
import { useState } from "react";

function Navigation() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav id="main-nav">
            <section>
                <div id="hamburger-toggle" onClick={toggleMenu}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </section>
            <ul className={menuOpen?" ":"hide-small"}>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/Guide">Fly Fishing Guide</Link></li>
                <li><Link to="/Library">Fish and Fly Library</Link></li>
                <li><Link to="/Spotlight">Fisherman's Spotlight</Link></li>
                <li><Link to="/About">About Me</Link></li>
            </ul>
        </nav>
    );
};

export default Navigation;
