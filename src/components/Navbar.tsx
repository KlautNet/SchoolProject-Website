import { NavLink } from "react-router-dom"

export const Navbar = () => {
    return (
        <div className="navbar">
            <h3 className="logo">Rekursion</h3>
            <div className="line"></div>
            <nav>
                <ul className="nav-links">
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/post/3">Start</NavLink></li>
                    <li><NavLink to="/posts">Entdecken</NavLink></li>
                </ul>
            </nav>
            <p className="login">Login</p>
        </div>
    )
}
