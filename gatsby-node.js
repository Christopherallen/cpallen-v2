const path = require(`path`)

 exports.createPages = ({ graphql, actions }) => {
   const { createPage } = actions
   return graphql(`
     {
       allWpPost(sort: { fields: [date], order:DESC }) {
         nodes {
           title
           excerpt
           content
           slug
         }
       }
     }
   `).then(result => {
    console.log(JSON.stringify(result, null, 4))
    result.data.allWpPost.nodes.forEach(node => {
        createPage({
          path: node.slug,
          component: path.resolve(`./src/templates/post.js`),
          context: {
            // This is the $slug variable passed to blog-post.js
            slug: node.slug,
          },
        })
      })
   })
 }
