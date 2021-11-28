import {graphql, useStaticQuery} from "gatsby"

const Single = () => {
  const data = useStaticQuery(graphql`
    query($slug: String!) {
      allWpPost(filter: { slug: { eq: $slug } }) {
        nodes {
          title
          content
          featuredImage {
            node {
              localFile {
                childImageSharp {
                  gatsbyImageData(
                    avifOptions: {quality: 10, lossless: false}
                    layout: FIXED
                    webpOptions: {quality: 100}
                    width: 1920
                    height: 650
                  )
                }
              }
            }
          }
        }
      }
    }

  `);
  return data.allWpPost.nodes[0];
}

export default Single
