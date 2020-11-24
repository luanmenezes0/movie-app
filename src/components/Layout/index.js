import Sidebar from '../Sidebar';
import * as S from './styled';
import GlobalStyles from '../../styles/global';

const Layout = ({ children }) => {
  return (
    <S.LayoutWrapper>
      <GlobalStyles />
      <Sidebar />
      <S.LayoutMain>{children}</S.LayoutMain>
    </S.LayoutWrapper>
  );
};

export default Layout;
