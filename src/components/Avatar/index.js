import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import { AvatarWrapper } from './styles';

const Avatar = () => {
  const { avatarImage } = useStaticQuery(graphql`
    query {
      avatarImage: file(relativePath: { eq: "profile-photo.jpeg" }) {
        childImageSharp {
          fluid(maxWidth: 60) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <AvatarWrapper fluid={avatarImage.childImageSharp.fluid} />
  );
};

export default Avatar;
