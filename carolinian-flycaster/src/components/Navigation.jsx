import './css/Navigation.css';
import {Outlet, Link} from "react-router-dom";

function Navigation() {
    return (
        <nav id="main-nav">
            <ul>
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
