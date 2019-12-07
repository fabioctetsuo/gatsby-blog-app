import React from 'react';
import PropTypes from 'prop-types';
import { TransitionPortal } from 'gatsby-plugin-transition-link';

import Sidebar from '../Sidebar';
import MenuBar from '../MenuBar';
import { LayoutWrapper, LayoutMain } from './styles';
import GlobalStyle from '../../styles/global';

const Layout = ({ children }) => {
  return (
    <LayoutWrapper>
      <GlobalStyle />
      <TransitionPortal level="top">
        <Sidebar />
      </TransitionPortal>
      <LayoutMain>{children}</LayoutMain>
      <TransitionPortal level="top">
        <MenuBar />
      </TransitionPortal>
    </LayoutWrapper>
  )
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
