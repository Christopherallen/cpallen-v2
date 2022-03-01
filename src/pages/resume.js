import * as React from "react"

// Layouts
import Layout from "../components/layout"

// Assets
import DownloadIcon from "../images/svgs/download.svg"

// Hooks
import Resume from "../hooks/resume"

// Seo
import Seo from "../components/seo"

const ResumePage = () => {
  const resumeData = Resume()
  const workExperience = resumeData.workExperience
  const skills = resumeData.skills

  const Experience = workExperience.map(work => (
    <div
      key={work.dates}
      className="resume__item"
      data-sal="slide-up"
      data-sal-easing="ease"
      data-sal-duration="900"
      data-sal-delay="200"
    >
      <div className="resume__left-col">
        <div className="resume__item-company">{work.company}</div>
        <div className="resume__item-date">{work.dates}</div>
      </div>
      <div className="resume__right-col">
        <div className="resume__item-title">{work.jobTitle}</div>
        <ul className="resume__item-list">
          {work.listItem.map(list => (
            <li key={list.item} className="resume__item-list-item">
              {list.item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  ))

  const SkillsList = skills.map(item => (
    <li key={item.skills} className="resume__skills-list-item">
      {item.skills}
    </li>
  ))

  return (
    <Layout>
      <Seo title="Resume" />
      <div className="resume">
        <div className="container">
          <h1
            data-sal="slide-up"
            data-sal-easing="ease"
            data-sal-duration="900"
          >
            Resume
          </h1>
          <h2
            className="resume__section-title"
            data-sal="slide-up"
            data-sal-easing="ease"
            data-sal-duration="900"
            data-sal-delay="100"
          >
            Experience
          </h2>
          {Experience}
          <h2
            className="resume__section-title"
            data-sal="slide-up"
            data-sal-easing="ease"
            data-sal-duration="900"
          >
            Education
          </h2>
          <div
            className="resume__item"
            data-sal="slide-up"
            data-sal-easing="ease"
            data-sal-duration="900"
          >
            <div className="resume__left-col">
              <div className="resume__item-company">{resumeData.school}</div>
              <div className="resume__item-date">
                {resumeData.dateGraduated}
              </div>
            </div>
            <div className="resume__right-col">
              <div className="resume__item-title">{resumeData.degree}</div>
            </div>
          </div>
          <h2
            className="resume__section-title"
            data-sal="slide-up"
            data-sal-easing="ease"
            data-sal-duration="900"
          >
            Skills
          </h2>
          <div className="resume__item">
            <div className="resume__left-col">
              <div className="resume__item-date">Software + Skills</div>
            </div>
            <div className="resume__right-col">
              <ul className="resume__skills-list">{SkillsList}</ul>
            </div>
          </div>
        </div>
        <a
          href={resumeData.download.localFile.publicURL}
          download
          target="_blank"
          rel="noreferrer"
          className="download-icon"
        >
          <DownloadIcon />
        </a>
      </div>
    </Layout>
  )
}

export default ResumePage
