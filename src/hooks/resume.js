import {graphql, useStaticQuery} from "gatsby"

const Resume = () => {
  const data = useStaticQuery(graphql`
    {
      allWpPage(filter: {title: {eq: "Resume"}}) {
        nodes {
          resume {
            workExperience {
              company
              dates
              fieldGroupName
              jobTitle
            }
            dateGraduated
            degree
            school
            skills {
              skills
            }
          }
        }
      }
    }

  `);
  return data.allWpPage.nodes[0].resume;
}

export default Resume
