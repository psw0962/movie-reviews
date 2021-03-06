import React from 'react';
import styled from 'styled-components';
import * as Font from '../components/common/Font';
import { useRouter } from 'next/router';
import GlobalStyle from '../styles/GlobalStyle';
import SearchBar from '../components/SearchBar/SearchBar';

const AppLayout = ({ children }) => {
  const router = useRouter();

  return (
    <>
      <GlobalStyle />

      <Header>
        <HeaderInnerBox>
          <div>
            <FontSize25 onClick={() => router.push('/')}>Movie Reviews</FontSize25>
          </div>

          <SearchBar />

          <InnerBox>
            <FontSize25 onClick={() => router.push('/wishlist')}>WishList</FontSize25>
          </InnerBox>
        </HeaderInnerBox>
      </Header>

      <ChildrenBox>{children}</ChildrenBox>

      <Footer>
        <div style={{ color: 'white', fontSize: '2rem' }}>footer</div>
      </Footer>
    </>
  );
};

export default AppLayout;

const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 1px 1px 10px lightgray;
  padding: 25px;
  margin-bottom: 50px;
`;

const HeaderInnerBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 1200px;
`;

const InnerBox = styled.div`
  display: flex;
  gap: 50px;
`;

const ChildrenBox = styled.div`
  max-width: 1200px;
  min-height: 100vh;
  margin: 0 auto;
`;

const FontSize25 = styled(Font.FontSize25)`
  font-size: 2.5rem;
  font-weight: 600;
  cursor: pointer;

  :hover {
    color: #d4d4d4;
    transition: ease-in-out 0.2s;
  }
`;

const Footer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 100px;
  padding: 20px;
  background-color: #1c1d1f;
`;
