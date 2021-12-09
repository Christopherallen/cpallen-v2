import * as React from "react"
import Layout from "../components/layout"
import { GatsbyImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import Icon from "../images/svgs/arrow-right.svg";
import Seo from "../components/seo"

const PostTemplate = ( { pageContext } ) => {
  const nextLink = pageContext.next !== null ? '/' + pageContext.next.slug : '';
  const prevLink = pageContext.prev !== null ?  '/' + pageContext.prev.slug : '';
  const paginationClass = pageContext.prev === null ? 'single-post__pagination single-post__pagination--end' : 'single-post__pagination'

  const imageGallery = pageContext.images.map(( images ) =>
    <div key={ images.projectImage.sourceUrl } className="single-post__image-wrapper" data-sal="slide-up" data-sal-duration="900">
      { images.projectImage.localFile.childImageSharp !== null ?
        <GatsbyImage
          image={ images.projectImage.localFile.childImageSharp.gatsbyImageData }
          width={1920}
          quality={100}
          placeholder="none"
          formats={["auto", "webp", "avif", "gif"]}
          alt={ pageContext.title }
          className="single-post__image"
        />
        :
        <img src={ images.projectImage.sourceUrl } alt="" className="single-post__image" />
      }
    </div>
  )

  return(
    <Layout>
      <Seo title={ pageContext.title } />
      <div className="single-post">
        <div className="single-post__hero-wrapper">
          <div data-sal="fade" data-sal-easing="ease" data-sal-duration="900">
            <GatsbyImage
              image={ pageContext.featured.node.localFile.childImageSharp.gatsbyImageData }
              width={1920}
              quality={100}
              placeholder="none"
              formats={["auto", "webp", "avif"]}
              alt={ pageContext.title }
              className="single-post__hero"
            />
          </div>
        </div>
        <div className="container">
          <h1 className="single-post__section-title" data-sal="slide-up" data-sal-duration="900">{ pageContext.title }</h1>
          <div className="single-post__intro" data-sal="slide-up" data-sal-duration="900">
            <div className="single-post__left-col">
              <div className="single-post__intro-description" dangerouslySetInnerHTML={{__html: pageContext.description}} />
              <a href={ pageContext.siteLink } target="_blank" rel="noreferrer" className="button button--ghost-dark">
                <span className="button__text">Visit Site</span>
                <span className="button__icon button__icon--right"><Icon /></span>
              </a>
            </div>
            <div className="single-post__right-col">
              <h2 className="single-post__sidebar-heading">Client</h2>
              <p className="single-post__sidebar-description">{ pageContext.client }</p>
              <h2 className="single-post__sidebar-heading">Role</h2>
              <p className="single-post__sidebar-description">{ pageContext.role }</p>
              <h2 className="single-post__sidebar-heading">Team</h2>
              <p className="single-post__sidebar-description">{ pageContext.team }</p>
            </div>
          </div>
          { imageGallery }
          <div className={paginationClass} data-sal="fade" data-sal-duration="900">
            { prevLink ?
              <Link to={prevLink} className="single-post__prev">
                <span className="single-post__prev-icon"><Icon /></span>
                { pageContext.prev.title }
              </Link>
              :
              ""
            }
            { nextLink ?
              <Link to={nextLink} className="single-post__next">
                { pageContext.next.title }
                <span className="single-post__next-icon"><Icon /></span>
              </Link>
              :
              ""
            }
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default PostTemplate
