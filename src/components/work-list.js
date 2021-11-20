import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

const Work = ( props ) => {
  const work = props.data;

  const workList = work.map(( work ) =>
    <div className="work-list__item">
      <a href="#">
        <StaticImage
          src="../images/work-featured-fresh.jpg"
          width={1100}
          quality={100}
          placeholder="none"
          formats={["auto", "webp", "avif"]}
          alt="Fresh Consulting Website"
          className="work-list__item-image"
        />
      </a>
      <div className="work-list__item-content-wrapper">
        <div className="work-list__item-right-col">
          <h3 className="work-list__item-title">{work.title}</h3>
          <p className="work-list__item-description">{work.content}</p>
        </div>
        <div className="work-list__item-left-col">
          <a href="#" className="button button--ghost-dark">View Details</a>
        </div>
      </div>
    </div>
  )

  return (
    <section id="work" className="work-list">
      <div className="container">
        <h2 className="work-list__section-title">Selected Work</h2>
        { workList }
      </div>
    </section>
  )
}
export default Work
