import React from 'react';
import { useStaticQuery, graphql } from "gatsby";
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
      <h1>{siteMetadata.title}</h1>
      <h2>{siteMetadata.position}</h2>
      <p>{siteMetadata.description}</p>
    </div>
  );
}

export default Profile;
