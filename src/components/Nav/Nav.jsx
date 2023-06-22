import { NavLink } from "react-router-dom";
import './Nav.css';

const Nav = () => {
    return (
        <nav style={{ borderBottom: "1px solid" }}>
            <ul>
                <NavLink to="/">
                    <li><h1>Creatorverse</h1></li>
                </NavLink>
            </ul>
            <ul>
                <NavLink to="/">
                    <li>View All Creators</li>
                </NavLink>
                <NavLink to="/add">
                    <li>Add a Creator</li>
                </NavLink>
            </ul>
        </nav>
    )
}

export default Nav;