import * as React from "react"

import { GatsbyImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import Icon from "../images/svgs/arrow-right.svg";


const Work = (props) => {
  const work = props.data;

  const workList = work.map((work) =>
    <div key={work.title} className="work-list__item">
      <div data-sal="slide-up" data-sal-easing="ease" data-sal-duration="900">
        <Link to={`/work${work.uri}`} aria-label={work.title}>
          <GatsbyImage
            image={work.posts.homeImage.localFile.childImageSharp.gatsbyImageData}
            objectFit="contain"
            width={100}
            quality={100}
            placeholder="none"
            formats={["auto", "webp", "avif"]}
            alt={work.title}
            className="work-list__item-image"
          />
        </Link>
      </div>
      <div className="work-list__item-content-wrapper" data-sal="slide-up" data-sal-easing="ease" data-sal-duration="900" data-sal-delay="200">
        <div className="work-list__item-right-col">
          <h3 className="work-list__item-title">{work.title}</h3>
          <div className="work-list__item-description" dangerouslySetInnerHTML={{ __html: work.content }} />
        </div>
        <div className="work-list__item-left-col">
          <Link to={`/work${work.uri}`} className="button button--ghost-dark">
            <span className="button__text">View Details</span>
            <span className="button__icon button__icon--right"><Icon /></span>
          </Link>
        </div>
      </div>
    </div>
  )

  return (
    <section id="work" className="work-list">
      <div className="container">
        <h2 className="work-list__section-title" data-sal="slide-up" data-sal-easing="ease" data-sal-duration="900">Selected Work</h2>
        {workList}
      </div>
    </section>
  )
}
export default Work
