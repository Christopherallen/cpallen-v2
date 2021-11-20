import {graphql, useStaticQuery} from "gatsby"

const UseWordPressPost = () => {
  const data = useStaticQuery(graphql`
      {
        allWpPost {
          nodes {
            id
            title
            content
          }
        }
      }

  `);
  return data.allWpPost.nodes;
}

export default UseWordPressPost
