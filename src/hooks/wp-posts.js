import {graphql, useStaticQuery} from "gatsby"

const UseWordPressPost = () => {
  const data = useStaticQuery(graphql`
      {
        allWpPost {
          nodes {
            id
            uri
            title
            content
            posts {
              homeImage {
                localFile {
                  childImageSharp {
                    gatsbyImageData(width: 1100, layout: FIXED)
                  }
                }
              }
            }
          }
        }
      }

  `);
  return data.allWpPost.nodes;
}

export default UseWordPressPost
