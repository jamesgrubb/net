import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { HeaderImage } from "../headerImage"
import { SVGFilter } from "../svgFilter"
import "./header.scss"

const Header = ({ artistName, artistSurname }) => (
  <header className="header">
    <SVGFilter />
    <nav className="nav">
      <Link to="/">
        <h1 className="artist">
          <span className="artist__name">{artistName}</span>
          <span className="artist__surname">
            <HeaderImage />
            {artistSurname}
          </span>
        </h1>
      </Link>
    </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
  artistName: PropTypes.string.isRequired,
  artistSurname: PropTypes.string.isRequired,
}

Header.defaultProps = {
  siteTitle: ``,
  artistName: "Rupert",
  artistSurname: "Gibson",
}

export default Header
