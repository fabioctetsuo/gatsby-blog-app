import React from 'react';

import Profile from '../Profile';
import SocialLinks from '../SocialLinks';

import { SidebarWrapper } from './styles';

const Sidebar = () => (
  <SidebarWrapper>
    <Profile />
    <SocialLinks />
  </SidebarWrapper>
);

export default Sidebar;
