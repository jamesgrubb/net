import React from "react"
import Img from "gatsby-image"
import { getFluidGatsbyImage } from "gatsby-source-sanity"

export default ({ node }) => {
  if (!node || !node.asset || !node.asset._id) {
    return null
  }
  const fluidProps = getFluidGatsbyImage(name.asset._id, { maxWidth: 300 })
  return (
    <figure>
      <Img fluid={fluidProps} alt={node.alt} />
      <figcaption>{node.caption}</figcaption>
    </figure>
  )
}
