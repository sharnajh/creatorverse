import { NavLink } from "react-router-dom";
import './Nav.css';

const Nav = () => {
    return (
        <nav>
            <ul>
                <NavLink to="/">
                    <li><strong>Creatorverse</strong></li>
                </NavLink>
            </ul>
            <ul>
                <NavLink to="/add">
                    <li>Add Creator</li>
                </NavLink>
            </ul>
        </nav>
    )
}

export default Nav;