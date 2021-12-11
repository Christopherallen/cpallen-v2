import {graphql, useStaticQuery} from "gatsby"

const Resume = () => {
  const data = useStaticQuery(graphql`
    {
      allWpPage(filter: {title: {eq: "Resume"}}) {
        nodes {
          resume {
            download {
              localFile {
                publicURL
              }
            }
            workExperience {
              company
              dates
              fieldGroupName
              jobTitle
              listItem {
                item
              }
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
