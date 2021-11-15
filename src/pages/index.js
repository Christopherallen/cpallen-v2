import * as React from "react"

import Layout from "../components/layout"
import Intro from "../components/intro"
import Work from "../components/work-list"

import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Intro />
    <Work />
  </Layout>
)

export default IndexPage
