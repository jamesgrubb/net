import React from "react"
import Track from "./track"
import { useStaticQuery, graphql } from "gatsby"
import "./tracklist.scss"

export default () => {
  const data = useStaticQuery(graphql`
    query TrackQuery {
      allSanityTrack {
        edges {
          node {
            id
            names
            link
          }
        }
      }
    }
  `)
  console.log(data.allSanityTrack.edges)

  return (
    <ul className="tracklist">
      {data.allSanityTrack.edges.map(({ node }, index) => (
        <Track {...node} />
      ))}
    </ul>
  )
}
