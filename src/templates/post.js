import * as React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import Seo from "../components/seo"

const PostTemplate = ( { data } ) => {
  const post = data.allWpPost.nodes[0];

  return(
    <Layout>
      <Seo title="Home" />
      <div className="single-post">
        <div className="single-post__hero-wrapper">
          <div data-sal="fade" data-sal-easing="ease" data-sal-duration="900">
            <GatsbyImage
              image={ post.featuredImage.node.localFile.childImageSharp.gatsbyImageData}
              width={1920}
              quality={100}
              placeholder="none"
              formats={["auto", "webp", "avif"]}
              alt={ post.title }
              className=""
            />
          </div>
        </div>
      <div className="container">
        <h1 className="single-post__section-title">{ post.title }</h1>
      </div>
      </div>
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
        featuredImage {
          node {
            localFile {
              childImageSharp {
                gatsbyImageData(
                  avifOptions: {quality: 10, lossless: false}
                  layout: FIXED
                  webpOptions: {quality: 100}
                  width: 1920
                  height: 650
                )
              }
            }
          }
        }
      }
    }
  }
`
