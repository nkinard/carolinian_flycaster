import './css/Navigation.css';
import {Outlet, Link} from "react-router-dom";

function Navigation() {
    return (
        <nav id="main-nav">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/Guide">Guide</Link></li>
                <li><Link to="/Library">Library</Link></li>
                <li><Link to="/Spotlight">Spotlight</Link></li>
                <li><Link to="/About">About</Link></li>
            </ul>
        </nav>
    );
};

export default Navigation;
