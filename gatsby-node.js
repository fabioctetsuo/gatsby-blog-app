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
    query GetPostsList {
      allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}) {
        edges {
          node {
            frontmatter {
              background
              category
              date(locale: "pt-BR", formatString: "DD [de] MMMM [de] YYYY")
              description
              title
            }
            timeToRead
            fields {
              slug
            }
          }
          next {
            fields {
              slug
            }
            frontmatter {
              title
            }
          }
          previous {
            frontmatter {
              title
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `).then(result => {
    const { data: { allMarkdownRemark: { edges: posts } } } = result;

    posts.forEach(({
      node: {
        fields: { slug }
      },
      previous,
      next,
    }) => {
      createPage({
        path: slug,
        component: path.resolve('./src/templates/blog-post.js'),
        context: { slug, previous, next },
      });
    });

    const postsPerPage = 2;
    const totalPages = Math.ceil(posts.length / postsPerPage);

    Array.from({ length: totalPages }).forEach((_, index) => {
      const currentPage = index + 1;
      const previousPage = index;
      createPage({
        path: index === 0 ? '/' : `/page/${currentPage}`,
        component: path.resolve('./src/templates/blog-list.js'),
        context: {
          limit: postsPerPage,
          skip: previousPage * postsPerPage,
          totalPages,
          currentPage,
        }
      });
    });
    
  });
};
