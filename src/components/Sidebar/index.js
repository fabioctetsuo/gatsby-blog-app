import React from 'react';

import Profile from '../Profile';
import SocialLinks from '../SocialLinks';
import MenuLinks from '../MenuLinks';

import { SidebarWrapper } from './styles';

const Sidebar = () => (
  <SidebarWrapper>
    <Profile />
    <SocialLinks />
    <MenuLinks />
  </SidebarWrapper>
);

export default Sidebar;
