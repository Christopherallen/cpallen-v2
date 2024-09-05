import * as React from "react"

import Layout from "../components/layout"
import Intro from "../components/intro"
import Work from "../components/work-list"
import UseWordPressPost from '../hooks/wp-posts';

import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Portfolio of Chris Allen" />
    <Intro />
    <Work data={UseWordPressPost()} />
  </Layout>
)

export default IndexPage
