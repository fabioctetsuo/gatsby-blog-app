import React from 'react';
import { useStaticQuery, graphql } from "gatsby";

import Avatar from '../Avatar';
import {
  ProfileWrapper,
  ProfileLink,
  ProfileAuthor,
  ProfilePosition,
  ProfileDescription,
} from './styles';

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
    <ProfileWrapper>
      <ProfileLink
        cover
        direction="left"
        duration={0.6}
        bg="#16202c"
      >
        <Avatar />
        <ProfileAuthor>
          {siteMetadata.title}
          <ProfilePosition>
            {siteMetadata.position}
          </ProfilePosition>
        </ProfileAuthor>
      </ProfileLink>
      <ProfileDescription>
        {siteMetadata.description}
      </ProfileDescription>
    </ProfileWrapper>
  );
}

export default Profile;
