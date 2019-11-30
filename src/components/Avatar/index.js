import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
// import { Container } from './styles';

const Avatar = () => {
  const { avatarImage } = useStaticQuery(graphql`
    query {
      avatarImage: file(relativePath: { eq: "profile-photo.jpeg" }) {
        childImageSharp {
          fluid(maxWidth: 60, maxHeight: 60) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <Img fluid={avatarImage.childImageSharp.fluid} style={{ width: '60px' }} />
  );
};

export default Avatar;
