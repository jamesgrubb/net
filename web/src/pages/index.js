import React from "react"
import { Link } from "gatsby"
import TrackList from "../components/tracklist/tracklist"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Link to="/page-2/">Go to page 2</Link>
    <TrackList />
  </Layout>
)

export default IndexPage
