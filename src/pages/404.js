import * as React from "react"

import Layout from "../components/layout"

// Assets
import Office from "../images/office-one.gif";
import Icon from "../images/svgs/arrow-right.svg";

import Seo from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <Seo title="404: Not found" />
    <div className="container">
      <div className="not-found">
        <h1 className="not-found__title">404 Page Not Found</h1>
        <img src={Office} alt="The Office Clip" width="350" className="not-found__image" />
        <a href="/" className="button button--ghost-dark">
          <span className="button__text">Return Home</span>
          <span className="button__icon button__icon--right"><Icon /></span>
        </a>
      </div>
    </div>
  </Layout>
)

export default NotFoundPage
