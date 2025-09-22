import reactLogo from "./assets/react-logo-dark.png"
import "./App.css"

function Header() {
    return(
        <>
            <header>
                <div className="logo-and-title">
                    <h2>Why</h2>
                    <img src={reactLogo} alt="react-logo-dark" className="logo"/>
                    <h2>is cool?</h2>
                </div>
            </header>

            <nav>
                <ul>
                    <li><a href="https://react.dev/learn">Learn</a></li>
                    <li><a href="https://react.dev/reference/react">Reference</a></li>
                    <li><a href="https://react.dev/community">Community</a></li>
                    <li><a href="https://react.dev/blog">Blog</a></li>
                </ul>
            </nav>

        </>
    )
}

export default Header