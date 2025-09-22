import reactLogo from "./assets/react-logo-dark.png"
import "./App.css"

function Header() {
    return(
        <header>
            <h2>Why</h2>
            <img src={reactLogo} alt="react-logo-dark" className="logo"/>
            <h2>is cool?</h2>
        </header>
    )
}

export default Header