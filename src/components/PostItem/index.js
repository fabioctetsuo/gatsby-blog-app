import React from 'react';

import {
  PostItemLink,
  PostItemWrapper,
  PostItemTag,
  PostItemInfo,
  PostItemDate,
  PostItemTitle,
  PostItemDescription,
} from './styles';

const PostItem = () => (
  <PostItemLink to="/slug/">
    <PostItemWrapper>
      <PostItemTag background="#47650b">Misc</PostItemTag>
      <PostItemInfo>
        <PostItemDate>30 de Julho de 2019 • 4 min de leitura</PostItemDate>
        <PostItemTitle>
          Diga não ao Medium: tenha sua própria plataforma
        </PostItemTitle>
        <PostItemDescription>
          Algumas razões para você ter sua própria plataforma ao invés de
          soluções como o Medium.
        </PostItemDescription>
      </PostItemInfo>
    </PostItemWrapper>
  </PostItemLink>
);

export default PostItem;
