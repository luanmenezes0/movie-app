import { Movie } from '@styled-icons/material-outlined';

import * as S from './styled';

const Sidebar = () => {
  const iconStyle = {
    height: '100%',
    paddingRight: '5px',
  };

  return (
    <S.SidebarWrapper>
      <S.ContentWrapper>
        <Movie style={iconStyle} />
        <S.Title>Movie App</S.Title>
        <nav>
          <ul>
            <S.SidebarLink>Now Playing</S.SidebarLink>
            <S.SidebarLink>Popular</S.SidebarLink>
            <S.SidebarLink>Top Rated</S.SidebarLink>
            <S.SidebarLink>Genres</S.SidebarLink>
          </ul>
        </nav>
      </S.ContentWrapper>
    </S.SidebarWrapper>
  );
};

export default Sidebar;
