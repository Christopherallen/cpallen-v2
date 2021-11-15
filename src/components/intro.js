import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

const Intro = () => (
  <section className="intro">
    <div className="container">
      <div className="intro__wrapper">
        <h1 className="intro__title">Hi, I’m Chris Allen</h1>
        <h2 className="intro__sub-title">Front-end developer</h2>
        <p className="intro__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer risus est, bibendum eget leo at, interdum pharetra felis. Etiam sed est in nibh bibendum faucibus a id justo. Vestibulum sit amet diam.</p>
        <a href="/#work" className="button button--blue intro__button">See Work</a>
        <div className="intro__profile-wrapper">
          <StaticImage
            src="../images/profile.png"
            width={387}
            quality={100}
            placeholder="none"
            formats={["auto", "webp", "avif"]}
            alt="Chris Allen's Logo"
          />
          <span className="intro__op intro__op--foreground intro__op--one">[ ]</span>
          <span className="intro__op intro__op--foreground intro__op--two">++</span>
          <span className="intro__op intro__op--foreground intro__op--three">{ "<>" }</span>
          <span className="intro__op intro__op--foreground intro__op--four">{ "{ }" }</span>
          <span className="intro__op intro__op--background intro__op--five">{ "!==" }</span>
          <span className="intro__op intro__op--background intro__op--six">{ "!==" }</span>
          <span className="intro__op intro__op--background intro__op--seven">{ "!==" }</span>
          <span className="intro__op intro__op--background intro__op--eight">{ "!==" }</span>
          <span className="intro__op intro__op--background intro__op--nine">{ "!==" }</span>
        </div>
      </div>
    </div>
  </section>
)

export default Intro
