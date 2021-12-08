import * as React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import Icon from "../images/svgs/arrow-right.svg";
import Seo from "../components/seo"

const PostTemplate = ( { data } ) => {
  const post = data.allWpPost.nodes[0];

  const imageGallery = post.posts.images.map(( images ) =>
    <div key={ images.projectImage.sourceUrl } className="single-post__image-wrapper" data-sal="slide-up" data-sal-duration="900">

      { images.projectImage.localFile.childImageSharp !== null ?
        <GatsbyImage
          image={ images.projectImage.localFile.childImageSharp.gatsbyImageData }
          width={1920}
          quality={100}
          placeholder="none"
          formats={["auto", "webp", "avif", "gif"]}
          alt={ post.title }
          className="single-post__image"
        />
        :
        <img src={ images.projectImage.sourceUrl } alt="" className="single-post__image" />
      }
    </div>
  )

  return(
    <Layout>
      <Seo title={ post.title } />
      <div className="single-post">
        <div className="single-post__hero-wrapper">
          <div data-sal="fade" data-sal-easing="ease" data-sal-duration="900">
            <GatsbyImage
              image={ post.featuredImage.node.localFile.childImageSharp.gatsbyImageData }
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
              <div className="single-post__intro-description" dangerouslySetInnerHTML={{__html: post.posts.description}} />
              <a href={ post.posts.siteLink } target="_blank" rel="noreferrer" className="button button--ghost-dark">
                <span className="button__text">Visit Site</span>
                <span className="button__icon button__icon--right"><Icon /></span>
              </a>
            </div>
            <div className="single-post__right-col">
              <h2 className="single-post__sidebar-heading">Client</h2>
              <p className="single-post__sidebar-description">{ post.posts.client }</p>
              <h2 className="single-post__sidebar-heading">Role</h2>
              <p className="single-post__sidebar-description">{ post.posts.role }</p>
              <h2 className="single-post__sidebar-heading">Team</h2>
              <p className="single-post__sidebar-description">{ post.posts.team }</p>
            </div>
          </div>
          { imageGallery }
          <div className="single-post__more">
            <Link to="/#work" className="button button--ghost-dark">
              <span className="button__text">View All Work</span>
              <span className="button__icon button__icon--right"><Icon /></span>
            </Link>
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
        posts {
          description
          siteLink
          client
          role
          team
          images {
            projectImage {
              localFile {
                childImageSharp {
                  gatsbyImageData(layout: FIXED, width: 1100)
                }
              }
              sourceUrl
            }
          }
        }
      }
    }
  }
`
