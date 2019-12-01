/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// To add slug name to each post created by the markdown files
const path = require('path');

const { createFilePath } = require(`gatsby-source-filesystem`);

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  // Ensures we are processing only markdown files
  if (node.internal.type === "MarkdownRemark") {
    // Use `createFilePath` to turn markdown files in our `posts` directory into `/:slug`
    const slug = createFilePath({
      node,
      getNode,
      basePath: "posts",
    });

    // Creates new query'able field with name of 'slug'
    createNodeField({
      node,
      name: "slug",
      value: `/${slug.slice(12)}`,
    });
  }
};

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  return graphql(`
    query GetPostSlugs {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `).then(({
    data: {
      allMarkdownRemark: {
        edges: posts,
      }
    }
  }) => {
    posts.forEach(({ node: { fields: { slug } } }) => {
      createPage({
        path: slug,
        component: path.resolve('./src/templates/blog-post.js'),
        context: { slug },
      });
    });
  })
};
