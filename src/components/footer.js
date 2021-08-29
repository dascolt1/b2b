import React from "react"
import "../styles/index.css"

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        <p>B2B &copy; {new Date().getFullYear().toString()} </p>
      </div>
    </footer>
  )
}

export default Footer
