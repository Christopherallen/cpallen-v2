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
                      layout: FIXED
                      webpOptions: {quality: 100}
                      width: 1920
                      height: 650
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
                      gatsbyImageData(layout: FIXED, width: 1100)
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
    posts.forEach((node, index) => {
        createPage({
          path: node.node.slug,
          component: path.resolve(`./src/templates/post.js`),
          context: {
            title: node.node.title,
            featured: node.node.featuredImage,
            description: node.node.posts.description,
            siteLink: node.node.posts.siteLink,
            client: node.node.posts.client,
            role: node.node.posts.role,
            team: node.node.posts.team,
            images: node.node.posts.images,
            slug: node.node.slug,
            prev: index === 0 ? null : posts[index - 1].node,
            next: index === posts.length - 1 ? null : posts[index + 1].node
          },
        })
      })
   })
 }
