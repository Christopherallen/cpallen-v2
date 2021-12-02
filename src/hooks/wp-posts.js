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
                    gatsbyImageData(
                      avifOptions: {quality: 10, lossless: false}
                      layout: CONSTRAINED
                      webpOptions: {quality: 100}
                      width: 1100
                    )
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
