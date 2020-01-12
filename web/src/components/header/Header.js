import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import './header.scss'

const Header = ({ name,surname }) => (
  <header className="header">
    <Link
          to="/"         
        >
         <h1 className="artist">
        <span className="artist__name">{name}</span>
        <span className="artist__surname">{surname}</span>
      </h1>
        </Link>
      
    
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
