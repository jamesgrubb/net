import React from "react"
import "./header-image.scss"
import PropTypes from "prop-types"
const HeaderImage = ({ src, alt }) => (
  <img className="artist__portrait" src={src} alt={alt} />
)

export default HeaderImage

HeaderImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
}

HeaderImage.defaultProps = {
  src: "https://source.unsplash.com/400x400?portrait,man",
  alt: "random image",
}
