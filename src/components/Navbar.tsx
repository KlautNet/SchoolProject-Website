import { NavLink } from "react-router-dom"

export const Navbar = () => {
    return (
        <div className="navbar">
            <h3 className="logo">Recursion</h3>
            <div className="line"></div>
            <nav>
                <ul className="nav-links">
                    <li><NavLink to="/">Home</NavLink></li>
                    <li>Start</li>
                    <li><NavLink to="/posts">Explore</NavLink></li>
                    <li>Contact</li>
                </ul>
            </nav>
            <p className="login">Login</p>
        </div>
    )
}
