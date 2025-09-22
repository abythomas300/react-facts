import {createRoot} from "react-dom/client"
import App from "./App"

const root = createRoot(document.querySelector("#rootDiv"))

console.log(<h2>Hi there!!</h2>)

root.render(
    <App />
)
