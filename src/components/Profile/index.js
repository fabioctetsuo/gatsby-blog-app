import React from 'react';
import { useStaticQuery, graphql } from "gatsby";

import Avatar from '../Avatar';
// import { Container } from './styles';

const Profile = () => {
  const { site: { siteMetadata } } = useStaticQuery(graphql`
    query MySiteMetadata {
      site {
        siteMetadata {
          title
          description
          position
        }
      }
    }
  `);

  return (
    <div className="Profile-wrapper">
      <Avatar />
      <h1>{siteMetadata.title}</h1>
      <h2>{siteMetadata.position}</h2>
      <p>{siteMetadata.description}</p>
    </div>
  );
}

export default Profile;
