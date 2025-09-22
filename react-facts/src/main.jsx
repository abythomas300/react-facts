import {createRoot} from "react-dom/client"
import Header from "./Header"
import Content from "./Content"
import Footer from "./Footer"

const root = createRoot(document.querySelector("#rootDiv"))

console.log(<h2>Hi there!!</h2>)

root.render(
    <>
      <Header />
      <Content />
      <Footer />
    </>
)
