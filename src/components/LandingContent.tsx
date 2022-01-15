import { NavLink } from "react-router-dom"

export const LandingContent = () => {


    return (
        <div className="landing-content">
            <div className="tools-content">
                <h1 className="tools-heading">Werkzeuge, die ich benutzt habe</h1>
                <div className="columns tools">
                    <div className="column">
                        <i className="devicon-react-original"></i>
                        <h3>React.js</h3>
                        <p className="tool-subheading">Javascript Bibliothek für user interfaces </p>
                        
                    </div>
                    <div className="column">
                        <i className="devicon-typescript-plain"></i>
                        <h3>Typescript</h3>
                        <p className="tool-subheading">Typ basierte Programmiersprache</p>
                        
                    </div>
                    <div className="column">
                        <i className="devicon-nodejs-plain"></i>
                        <h3>Node.js</h3>
                        <p className="tool-subheading">Javascript Runtime</p>
                    
                    </div>
                    <div className="column">
                        
                        <i className="devicon-sass-original"></i>
                        <h3>Sass</h3>
                        <p className="tool-subheading">Styling</p>
                    </div>
                </div>
            </div>
            <div className="topics-wrapper">
                <div className="columns topics-content">
                    <div className="column is-two-fifths ">
                        <div className="topics-headings">
                            <p className="topics-heading">Auf der Suche <br></br>nach einem bestimmten Thema? </p>
                            <p className="topics-subheading">Wähle eine <br /> der Kategorien</p>
                        </div>
                    </div>
                    <div className="column">
                        <div className="topic-card">
                            <NavLink className="category-link" to={"/category/start"}>
                                <div className="topic-card-content">
                                    <i className="devicon-devicon-plain"></i>
                                    <h3>Start</h3>
                                </div>
                            </NavLink>
                        </div>
                        <div className="topic-card">
                            <div className="topic-card-content">
                                <i className="devicon-devicon-plain"></i>
                                <h3>Code</h3>
                                <p>3 posts</p>
                            </div>
                        </div>
                    </div>
                    <div className="column">
                        <div className="topic-card">
                            <NavLink className="category-link" to={"/category/basics"}>
                                <div className="topic-card-content">
                                    <i className="devicon-devicon-plain"></i>
                                    <h3>Basics</h3>
                                </div>
                            </NavLink>
                        </div>
                        <div className="topic-card">
                            <div className="topic-card-content">
                                <i className="devicon-devicon-plain"></i>
                                <h3>Code</h3>
                                <p>3 posts</p>
                            </div>
                        </div>
                    </div>
                    <div className="column">
                        <div className="topic-card">
                            <NavLink className="category-link" to={"/category/code"}>
                                <div className="topic-card-content">
                                    <i className="devicon-devicon-plain"></i>
                                    <h3>Code</h3>
                                </div>
                            </NavLink>
                        </div>
                        <div className="topic-card">
                            <div className="topic-card-content">
                                <i className="devicon-devicon-plain"></i>
                                <h3>Code</h3>
                                <p>3 posts</p>
                            </div>
                        </div>
                    </div>
                    <div className="column">
                        <div className="topic-card">
                            <NavLink className="category-link" to={"/category/visualization"}>
                                <div className="topic-card-content">
                                    <i className="devicon-devicon-plain"></i>
                                    <h3>Visuals</h3>
                                </div>
                            </NavLink>
                        </div>
                        <div className="topic-card">
                            <div className="topic-card-content">
                                <i className="devicon-devicon-plain"></i>
                                <h3>Code</h3>
                                <p>3 posts</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LandingContent
