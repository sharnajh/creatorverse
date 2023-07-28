import { forwardRef } from "react";
import { NavLink } from "react-router-dom";
//import logo from "../../assets/logo.svg"
import './Nav.css';

// eslint-disable-next-line react/display-name
const Nav = forwardRef((props, ref) => {
    return (
        <nav ref={ref} className="container-fluid">
            <ul>
                <NavLink to="/">
                    {/* <li className="logo"><img src={logo} /></li> */}
                    <li><h3>Creatorverse</h3></li>
                </NavLink>
            </ul>
            <ul>
                <NavLink className="secondary" to="/">
                    <li>View All Creators</li>
                </NavLink>
                <NavLink className="secondary" to="/add">
                    <li>Add a Creator</li>
                </NavLink>
            </ul>
        </nav>
    )
})

export default Nav;