import * as React from "react"

import MailIcon from "../images/mail.svg"
import LinkedInIcon from "../images/linkedin.svg"
import GitHubIcon from "../images/github.svg"

const Footer = () => (
  <footer className="footer">
    <h4 className="footer__header" data-sal="slide-up" data-sal-easing="ease" data-sal-duration="900">Get in Touch</h4>
    <div className="footer__connect" data-sal="slide-up" data-sal-easing="ease" data-sal-duration="900" data-sal-delay="200">
      <a className="footer__connect-link" href="mailto:chris@cpallen.com" target="_blank" rel="noreferrer">
        <MailIcon />
        <span className="sr-only">Email Me</span>
      </a>
      <a className="footer__connect-link" href="https://www.linkedin.com/in/chrispaulallen/" target="_blank" rel="noreferrer">
        <LinkedInIcon />
        <span className="sr-only">View LinkedIn Profile</span>
      </a>
      <a className="footer__connect-link" href="https://github.com/Christopherallen" target="_blank" rel="noreferrer">
        <GitHubIcon />
        <span className="sr-only">View Github Profile</span>
      </a>
    </div>
    <div className="footer__copyright">© {new Date().getFullYear()} Chris Allen</div>
  </footer>
)

export default Footer
