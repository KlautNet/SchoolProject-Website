import { NavLink, Link } from "react-router-dom"

export const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-links">
                <div className="columns">
                    <div className="column">
                        <h1>Anfangen</h1>
                        <ul>
                            <li> <NavLink to="/posts">Posts</NavLink></li>
                            <li> <NavLink to={"/post/6"}>Lernpfad beginnen</NavLink></li>
                        </ul>
                    </div>
                    <div className="column">
                        <h1>Rechtliches</h1>
                        <ul>
                            <li><NavLink to={`/impressum`} className="postpage-link">Impressum</NavLink></li>
                        </ul>
                    </div>
                    <div className="column">
                        <h1>Sozial</h1>
                        <ul>
                            <li>
                                <div className="github">
                                    <a href="https://github.com/KlautNet/recursion-website"><i className="devicon-github-original github-link"></i></a>
                                </div>          
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="copyright">
                <p>Copyright © Max Mustermann {new Date().getFullYear()}</p>
            </div>
            
        </div>
    )
}
