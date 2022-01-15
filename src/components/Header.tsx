import { NavLink } from "react-router-dom"


function Header() {
    return (
        <div className="header">
            <div className="header-headings">
                <h1>Mein Rekursions-Lernpfad</h1>
                <p>Während der letzten Unterrichtseinheit habe ich viel über das Konzept der Rekursion gelernt
                <br></br>Drücke start um mich auf meiner Reise zu begleiten </p>
            </div>

            <div className="header-wrapper">
                    <div className="btn-wrapper">
                        <NavLink to={"/post/3"} className="btn-primary">Start</NavLink>
                    </div>
                   
            </div>  
                
        </div>
    )
}

export default Header
