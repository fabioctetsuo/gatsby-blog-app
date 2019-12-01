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
            fields {
              slug
            }
          }
        }
      }
    }
  `);

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
}

export default IndexPage;
