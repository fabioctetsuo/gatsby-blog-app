import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import PostItem from '../components/PostItem';
import Layout from '../components/Layout';
import SEO from '../components/seo';

const IndexPage = () => {
  const { allMarkdownRemark: { edges: posts } } = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
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
          }
        }
      }
    }
  `);

  return (
    <Layout>
      <SEO title="Home" />
      {posts && posts.map(({ node }) => (
        <PostItem
          slug="/about/"
          category={node.frontmatter.category}
          date={node.frontmatter.date}
          timeToRead={node.timeToRead}
          title={node.frontmatter.title}
          description={node.frontmatter.description}
        />
      ))}
    </Layout>
  );
}

export default IndexPage;
