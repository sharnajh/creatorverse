import { NavLink } from "react-router-dom";

const Nav = () => {
    return (
        <nav>
            <h1>Creatorverse</h1>
            <NavLink to="/add">
                <h4>Add Creator</h4>
            </NavLink>
        </nav>
    )
}

export default Nav;