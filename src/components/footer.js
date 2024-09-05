import * as React from "react"

import MailIcon from "../images/svgs/mail.svg"
import LinkedInIcon from "../images/svgs/linkedin.svg"
import GitHubIcon from "../images/svgs/github.svg"

const Footer = () => (
  <footer className="footer">
    <h4 className="footer__header" data-sal="slide-up" data-sal-easing="ease" data-sal-duration="900">Get in Touch</h4>
    <div className="footer__connect" data-sal="slide-up" data-sal-easing="ease" data-sal-duration="900" data-sal-delay="200">
      <a className="footer__connect-link" aria-label="email me" href="mailto:chris@cpallen.com" target="_blank" rel="noreferrer">
        <MailIcon />
      </a>
      <a className="footer__connect-link" aria-label="View LinkedIn Profile" href="https://www.linkedin.com/in/chrispaulallen/" target="_blank" rel="noreferrer">
        <LinkedInIcon />
      </a>
      <a className="footer__connect-link" aria-label="View Github Profile" href="https://github.com/Christopherallen" target="_blank" rel="noreferrer">
        <GitHubIcon />
      </a>
    </div>
    <div className="footer__copyright">© {new Date().getFullYear()} Chris Allen</div>
  </footer>
)

export default Footer
