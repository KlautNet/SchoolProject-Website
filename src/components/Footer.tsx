export const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-links">
                <div className="columns">
                    <div className="column">
                        <h1>Get Started</h1>
                        <ul>
                            <li>Posts</li>
                            <li>Start Learnpath</li>
                        </ul>
                    </div>
                    <div className="column">
                        <h1>Legal</h1>
                        <ul>
                            <li>Impressum</li>
                            <li>Privacy Policy</li>
                        </ul>
                    </div>
                    <div className="column">
                        <h1>Social</h1>
                        <ul>
                            <li>
                                <div className="github">
                                    <i className="devicon-github-original"></i>
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
