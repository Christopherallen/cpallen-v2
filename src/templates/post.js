import * as React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import Icon from "../images/svgs/arrow-right.svg";
import Seo from "../components/seo"

const PostTemplate = ( { data } ) => {
  const post = data.allWpPost.nodes[0];

  return(
    <Layout>
      <Seo title={ post.title } />
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
        <h1 className="single-post__section-title" data-sal="slide-up" data-sal-duration="900">{ post.title }</h1>
        <div className="single-post__intro" data-sal="slide-up" data-sal-duration="900">
          <div className="single-post__left-col">
            <p className="single-post__intro-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ullamcorper placerat rhoncus. Sed nec sapien non turpis facilisis dapibus. Morbi nec risus vel elit ullamcorper ullamcorper. Sed a imperdiet libero. Maecenas mattis arcu at erat porttitor, dignissim accumsan neque vulputate. Donec malesuada a magna quis ullamcorper. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per.</p>
            <a href="#nogo" className="button button--ghost-dark">
              <span className="button__text">Visit Site</span>
              <span className="button__icon button__icon--right"><Icon /></span>
            </a>
          </div>
          <div className="single-post__right-col">
            <h2 className="single-post__sidebar-heading">Client</h2>
            <p className="single-post__sidebar-description">Fresh Consulting</p>
            <h2 className="single-post__sidebar-heading">Role</h2>
            <p className="single-post__sidebar-description">Technical Project Owner</p>
            <h2 className="single-post__sidebar-heading">Team</h2>
            <p className="single-post__sidebar-description">6 Developers, designers, and PM</p>
          </div>
        </div>
        <div className="single-post__image-wrapper" data-sal="slide-up" data-sal-duration="900">
          <img src="https://dev.cpallen.com/wp-content/uploads/2021/11/fresh-browser-scaled.jpg" className="single-post__image" alt="" />
        </div>
        <div className="single-post__callout" data-sal="slide-up" data-sal-duration="900">
          <p className="single-post__callout-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ullamcorper placerat rhoncus. Sed nec sapien non turpis facilisis dapibus. Morbi nec risus vel elit ullamcorper ullamcorper. Sed a imperdiet libero. Maecenas mattis arcu at erat porttitor, dignissim accumsan neque vulputate.</p>
        </div>
        <div className="single-post__image-wrapper" data-sal="slide-up" data-sal-duration="900">
          <img src="https://dev.cpallen.com/wp-content/uploads/2021/11/fresh-screens-scaled.jpg" className="single-post__image" alt="" />
        </div>
        <div className="single-post__callout" data-sal="slide-up" data-sal-duration="900">
          <p className="single-post__callout-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ullamcorper placerat rhoncus. Sed nec sapien non turpis facilisis dapibus. Morbi nec risus vel elit ullamcorper ullamcorper. Sed a imperdiet libero. Maecenas mattis arcu at erat porttitor, dignissim accumsan neque vulputate.</p>
        </div>
        <div className="single-post__flex" data-sal="slide-up" data-sal-duration="900">
          <div className="single-post__image-wrapper">
            <img src="https://dev.cpallen.com/wp-content/uploads/2021/11/fresh-services.png" className="single-post__image" alt="" />
          </div>
          <div className="single-post__image-wrapper">
            <img src="https://dev.cpallen.com/wp-content/uploads/2021/11/fresh-services.png" className="single-post__image" alt="" />
          </div>
        </div>
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
