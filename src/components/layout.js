import React from "react"
import Header from "./header"
import Footer from "./footer"
import "../styles/index.css"

const Layout = props => {
  return (
    <div>
      <div className="content">
        <Header />
        <div className="main-content">{props.children}</div>
      </div>
      <Footer />
    </div>
  )
}

export default Layout
