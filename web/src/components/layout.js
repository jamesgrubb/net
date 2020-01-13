/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useRef, useEffect } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { Header } from "./header"
import { Player } from "./player"
import { Container } from "./container"
import gsap from "gsap"
import "./layout.scss"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  const containerRef = useRef()

  const ref = useRef()

  useEffect(() => {}, [])

  useEffect(() => {
    // gsap.set(ref.current, { autoAlpha: 1 })
    // gsap.from(ref.current.childNodes.NodeList[0],{y: -40, duration: 2, stagger: 0.6})

    gsap
      .timeline()
      .from(containerRef.current, { opacity: 0, duration: 4 })
      .from(
        ref.current.children,
        {
          opacity: 0,
          y: -40,
          duration: 2,
          stagger: 0.6,
          ease: "expo",
        },
        "-=3"
      )
  }, [])

  return (
    <>
      <Container ref={containerRef}>
        <Header
          ref={ref}
          name="Rupert"
          surname="Gibson"
          siteTitle={data.site.siteMetadata.title}
        />
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `0px 1.0875rem 1.45rem`,
            paddingTop: 0,
          }}
        >
          <main>{children}</main>
          <Player playing="Hello" />
          <footer>
            © {new Date().getFullYear()}, Built with
            {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
          </footer>
        </div>
      </Container>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
