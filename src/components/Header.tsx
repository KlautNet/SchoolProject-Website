import { NavLink } from "react-router-dom"


function Header() {
    return (
        <div className="header">
            <div className="header-headings">
                <h1>My Recursion learning path</h1>
                <p>During the last half year I learned a lot about the concept of Recursion
                <br></br>Click start to accompany me on my journey </p>
            </div>
            <div className="columns">
                <div className="column header-buttons">
                    <div className="btn-wrapper">
                        <NavLink to={"/post/6"} className="btn-primary">Start</NavLink>
                    </div>
                    <div className="btn-wrapper-secondary">
                        <NavLink to="/posts" className="btn-secondary">Explore</NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
