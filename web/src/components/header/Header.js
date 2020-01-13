import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { forwardRef } from "react"
import { HeaderImage } from "../headerImage"
import { SVGFilter } from "../svgFilter"
import "./header.scss"

const Header = forwardRef((props, ref) => {
  return (
    <header className="header">
      <SVGFilter />
      <nav className="nav">
        <Link to="/">
          <h1 ref={ref} className="artist">
            <span className="artist__name">{props.artistName}</span>
            <span className="artist__surname">
              <HeaderImage />
              {props.artistSurname}
            </span>
          </h1>
        </Link>
      </nav>
    </header>
  )
})

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
