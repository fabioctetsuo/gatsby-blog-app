import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import RecommendedPosts from '../components/RecommendedPosts';
import Comments from '../components/Comments';
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
      fields: {
        slug
      },
      frontmatter: {
        title,
        date,
        description,
        image,
      },
    }
  } = data;
  const { next, previous } = pageContext;

  return (
    <Layout>
      <SEO
        title={title}
        description={description}
        image={image}
      />
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
      <Comments url={slug} title={title} />
    </Layout>
  );
};

export const query = graphql`
  query MyQuery($slug: String) {
    markdownRemark(fields: {slug: {eq: $slug}}) {
      html
      timeToRead
      fields {
        slug
      }
      frontmatter {
        title
        background
        category
        date(formatString: "DD [de] MMMM [de] YYYY")
        description
        image
      }
    }
  }
`; 

export default BlogPost;
