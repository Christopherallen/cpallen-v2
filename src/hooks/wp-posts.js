import {graphql, useStaticQuery} from "gatsby"

const UseWordPressPost = () => {
  const data = useStaticQuery(graphql`
      {
        allWpPost(sort: { fields: [date], order:DESC }) {
          nodes {
            id
            uri
            title
            content
            posts {
              homeImage {
                localFile {
                  childImageSharp {
                    gatsbyImageData(width: 1920)
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
