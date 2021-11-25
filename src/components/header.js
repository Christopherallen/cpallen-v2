import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import Logo from "../images/svgs/logo.svg";

const Header = ({ siteTitle }) => (
  <header className="header">
    <div className="container">
      <div className="header__wrapper">
        <div className="header__logo">
          <Link to="/" className="header__logo-link">
            <Logo />
            <span className="sr-only">{siteTitle}</span>
            <span className="header__logo-name">
              <span>h</span>
              <span>r</span>
              <span>i</span>
              <span>s</span>
              <span> A</span>
              <span>l</span>
              <span>l</span>
              <span>e</span>
              <span>n</span>
            </span>
          </Link>
        </div>
        <nav className="header__nav">
          <ul className="header__nav-list">
            <li><Link to="/#work" className="header__nav-link">Work</Link></li>
            <li><Link to="/resume" className="header__nav-link">Resume</Link></li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
