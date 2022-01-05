import { Link } from "react-router-dom"

export const Navbar = () => {
    return (
        <div className="navbar">
            <h3 className="logo">Recursion</h3>
            <div className="line"></div>
            <nav>
                <ul className="nav-links">
                    <li><Link to="/">Home</Link></li>
                    <li>Start</li>
                    <li><Link to="/posts">Explore</Link></li>
                    <li>Contact</li>
                </ul>
            </nav>
            <p className="login">Login</p>
        </div>
    )
}
