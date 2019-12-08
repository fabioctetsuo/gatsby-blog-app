import React from 'react';

import links from './content';

import { getBackgroundColor } from '../../utils/getBackgroundColor';
import {
  MenuLinksWrapper,
  MenuLinksList,
  MenuLinksItem,
  MenuLinksLink,
} from './styles';

const MenuLinks = () => (
  <MenuLinksWrapper>
    <MenuLinksList>
      {links.map((link, i) => (
        <MenuLinksItem key={i}>
          <MenuLinksLink
            cover
            direction="left"
            duration={0.5}
            bg={getBackgroundColor()}
            to={link.url}
            activeClassName='active'
          >
            {link.label}
          </MenuLinksLink>
        </MenuLinksItem>
      ))}
    </MenuLinksList>
  </MenuLinksWrapper>
);

export default MenuLinks;
