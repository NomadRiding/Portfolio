import React from "react"
import { Link } from "react-router-dom"
import "../Styles/NavBar.css"

export default function NavBar() {
  return (
    <>
      <div className="Nav-Container">
        <div className="NavBanner">
          <p>Available for Hire</p>
        </div>
        <nav className="NavBar">
          <ul>
            <li>
              <Link to="/" className="logo">
                Logo
              </Link>
            </li>
            <li>
              <Link to="/" className="resume">
                Resume
              </Link>
            </li>
            <li>
              <Link to="/" className="about">
                About
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  )
}
