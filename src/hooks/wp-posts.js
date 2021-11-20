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
          }
        }
      }

  `);
  return data.allWpPost.nodes;
}

export default UseWordPressPost
