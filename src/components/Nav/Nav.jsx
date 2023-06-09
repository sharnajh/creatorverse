import { NavLink } from "react-router-dom";
import './Nav.css';

const Nav = () => {
    return (
        <nav>
            <ul>
                <NavLink to="/">
                    <li><h1>Creatorverse</h1></li>
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