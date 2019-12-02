import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import RecommendedPosts from '../components/RecommendedPosts';
import SEO from '../components/seo';
import {
  PostHeader,
  PostDate,
  PostTitle,
  PostDescription,
  MainContent,
} from '../components/Post/styles';

const BlogPost = ({ data, pageContext }) => {
  const {
    markdownRemark: {
      timeToRead,
      html,
      frontmatter: {
        title,
        // background,
        // category,
        date,
        description,
      },
    }
  } = data;
  const { next, previous } = pageContext;

  return (
    <Layout>
      <SEO title={title} />
        <PostHeader>
          <PostDate>
          {date} • {timeToRead} min de leitura
        </PostDate>
        <PostTitle>{title}</PostTitle>
        <PostDescription>{description}</PostDescription>
      </PostHeader>
      <MainContent>
        <div dangerouslySetInnerHTML={{ __html: html }}></div>
      </MainContent>
      <RecommendedPosts next={next} previous={previous}/>
    </Layout>
  );
};

export const query = graphql`
  query MyQuery($slug: String) {
    markdownRemark(fields: {slug: {eq: $slug}}) {
      html
      timeToRead
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
