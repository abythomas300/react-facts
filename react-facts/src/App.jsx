import reactLogo from "./assets/react-logo-dark.png"
import "./app.css"

function App() {
  return(
    <div className="main-container">
      <h2>Why</h2>
      <img src={reactLogo} alt="react-logo-dark" className="logo"/>
      <h2>is cool?</h2>
      <div className="main-container">
        <ul>
          <li>Virtual DOM</li>
          <li>Components make UI reusable and easy to code</li>
          <li>Better documentation</li>
          <li>Companies love it</li>
          <li>Always improving</li>
        </ul>
      </div>
    </div>
  )
}

export default App