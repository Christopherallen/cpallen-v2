import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import Icon from "../images/svgs/arrow-down.svg"


const Intro = () => (
  <section className="intro">
    <div className="container">
      <div className="intro__wrapper">
        <h1 className="intro__title" data-sal="slide-up" data-sal-duration="900">Hi, I’m Chris Allen</h1>
        <h2 className="intro__sub-title" data-sal="slide-up" data-sal-duration="900" data-sal-delay="200">Front-end developer</h2>
        <p className="intro__description" data-sal="slide-up" data-sal-duration="900" data-sal-delay="400">I help build high-quality websites and applications.</p>
        <Link to="/#work" className="button button--ghost-dark intro__button" data-sal="slide-up" data-sal-duration="900" data-sal-delay="600">
          <span className="button__text">See Work</span>
          <span className="button__icon button__icon--down"><Icon /></span>
        </Link>
        <div className="intro__profile-wrapper" data-sal="fade" data-sal-duration="900" data-sal-delay="800">
          <StaticImage
            src="../images/profile.png"
            width={387}
            quality={100}
            placeholder="none"
            formats={["auto", "webp", "avif"]}
            alt="Chris Allen's Logo"
          />
          <span aria-hidden="true" className="intro__op intro__op--foreground intro__op--one">{'[ ]'}</span>
          <span aria-hidden="true" className="intro__op intro__op--foreground intro__op--two">{'++'}</span>
          <span aria-hidden="true" className="intro__op intro__op--foreground intro__op--three">{"<>"}</span>
          <span aria-hidden="true" className="intro__op intro__op--background intro__op--five">{"!=="}</span>
          <span aria-hidden="true" className="intro__op intro__op--background intro__op--six">{"??"}</span>
          <span aria-hidden="true" className="intro__op intro__op--background intro__op--seven">{"%"}</span>
          <span aria-hidden="true" className="intro__op intro__op--background intro__op--eight">{"&&"}</span>
          <span aria-hidden="true" className="intro__op intro__op--background intro__op--nine">{"*"}</span>
        </div>
      </div>
    </div>
  </section>
)

export default Intro
