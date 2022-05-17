const path = require(`path`)

 exports.createPages = ({ graphql, actions }) => {
   const { createPage } = actions
   return graphql(`
     {
       allWpPost(sort: { fields: [date], order:DESC }) {
        edges {
         node {
            slug
            title
            featuredImage {
              node {
                localFile {
                  childImageSharp {
                    gatsbyImageData(
                      avifOptions: {quality: 10, lossless: false}
                      webpOptions: {quality: 100}
                      width: 1920
                    )
                  }
                }
              }
            }
            posts {
              description
              siteLink
              client
              role
              team
              images {
                projectImage {
                  localFile {
                    childImageSharp {
                      gatsbyImageData(width: 1100)
                    }
                  }
                  sourceUrl
                }
              }
            }
          }
         }
       }
     }
   `).then(result => {
    const posts = result.data.allWpPost.edges
    posts.forEach((post, index) => {
      const postData = post.node;
      createPage({
        path: "work/" + post.node.slug,
        component: path.resolve(`./src/templates/post.js`),
        context: {
          title: postData.title,
          featured: postData.featuredImage,
          description: postData.posts.description,
          siteLink: postData.posts.siteLink,
          client: postData.posts.client,
          role: postData.posts.role,
          team: postData.posts.team,
          images: postData.posts.images,
          slug: "work/" + postData.slug,
          prev: index === 0 ? null : posts[index - 1].node,
          next: index === posts.length - 1 ? null : posts[index + 1].node,
        },
      })
    })
   })
 }
