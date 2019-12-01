import React from 'react';
import { graphql } from 'gatsby';

const BlogPost = ({ data }) => {
  const {
    markdownRemark: {
      html,
      frontmatter: {
        title,
        // background,
        // category,
        // date,
        // description,
      },
    }
  } = data;
  return (
    <>
      <h1>{title}</h1>
      <div dangerouslySetInnerHTML={{ __html: html }}></div>
    </>
  );
};

export const query = graphql`
  query MyQuery($slug: String) {
    markdownRemark(fields: {slug: {eq: $slug}}) {
      html
      frontmatter {
        title
        background
        category
        date(formatString: "DD [de] MMMM [de] YYYY")
        description
      }
    }
  }
`; 

export default BlogPost;
