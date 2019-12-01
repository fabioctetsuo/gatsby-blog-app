import React from 'react';
import { graphql } from 'gatsby';

import PostItem from '../components/PostItem';
import Layout from '../components/Layout';
import SEO from '../components/seo';

const BlogList = (props) => {
  const { allMarkdownRemark: { edges: posts } } = props.data;
  return (
    <Layout>
      <SEO title="Home" />
      {posts && posts.map(({
        node: {
          frontmatter: { category, date, title, description },
          timeToRead,
          fields: { slug },
        },
      }) => (
        <PostItem
          slug={slug}
          category={category}
          date={date}
          timeToRead={timeToRead}
          title={title}
          description={description}
        />
      ))}
    </Layout>
  );
};

export const query = graphql`
  query GetPaginatedPosts($limit: Int!, $skip: Int!) {
    allMarkdownRemark(
      sort: {fields: frontmatter___date, order: DESC}
      limit: $limit
      skip: $skip
    ) {
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
      }
    }
  }
`; 

export default BlogList;
