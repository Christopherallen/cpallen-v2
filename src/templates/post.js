import * as React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import Seo from "../components/seo"

const PostTemplate = ( { data } ) => {
  const post = data.allWpPost.nodes[0];

  return(
    <Layout>
      <Seo title="Home" />
      <h1>{ post.title }</h1>
    </Layout>
  )
}

export default PostTemplate

export const query = graphql`
  query($slug: String!) {
    allWpPost(filter: { slug: { eq: $slug } }) {
      nodes {
        title
        content
      }
    }
  }
`
