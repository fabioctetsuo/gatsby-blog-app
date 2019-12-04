const postsQuery = `
  {
    posts: allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}) {
      edges {
        node {
          objectID: id
          frontmatter {
            category
            date_timestamp: date
            date(locale: "pt-BR", formatString: "DD [de] MMMM [de] YYYY")
            description
            title
          }
          fields {
            slug
          }
          excerpt(pruneLength: 5000)
        }
      }
    }
  }`;

// function that returns an array with objects parsed to algolia reader
const flatten = (array) =>
  array.map(({ node: { frontmatter, ...rest } }) => ({
    ...frontmatter,
    date_timestamp: parseInt(
      (new Date(frontmatter.date_timestamp).getTime() / 1000).toFixed(0)
    ),
    ...rest,
  }))

const queries = [
  {
    query: postsQuery,
    transformer: ({ data }) => flatten(data.posts.edges), // optional
    indexName: 'Posts', // overrides main index name, optional
    settings: {
      // busca mais rapida, separando de 20 em 20
      attributesToSnippet: ['excerpt:20']
    },
  },
];

module.exports = queries;