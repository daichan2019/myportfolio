import React from "react"
import { Link } from "gatsby"
import logo from "../images/logo.png"
import Styles from "./Header.module.scss"

const Header = () => {
  return (
    <header className={Styles.header}>
      <div className={Styles.inner}>
        <h1 className={Styles.logo}>
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </h1>
        <nav className={Styles.nav}>
          <ul className={Styles.navList}>
            <li className={Styles.navItem}>
              <Link to="/">Home</Link>
            </li>
            <li className={Styles.navItem}>
              <Link to="/about/">About Me</Link>
            </li>
            <li className={Styles.navItem}>
              <Link to="/works/">Works</Link>
            </li>
            <li className={Styles.navItem}>
              <Link to="/contact/">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
