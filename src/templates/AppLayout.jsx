import React from 'react';
import styled from 'styled-components';
import * as Font from '../components/common/Font';
import { useRouter } from 'next/router';
import GlobalStyle from '../styles/GlobalStyle';

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

          <Wrapper>
            <SearchIcon src={'search.svg'} />
            <SearchBox placeholder="보고싶은 영화를 검색해 보세요." />
          </Wrapper>

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
  font-weight: 400;
  cursor: pointer;

  :hover {
    color: #d4d4d4;
    transition: ease-in-out 0.2s;
  }
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  background-color: #f5f5f7;
  width: 40%;
  padding: 5px;
`;

const SearchBox = styled.input`
  width: 100%;
  height: 33px;
  border: none;
  background-color: #f5f5f7;
  outline: none;
  font-size: 1.9rem;

  @media screen and (max-width: 765px) {
    ::placeholder {
      color: transparent;
    }
  }
`;

const SearchIcon = styled.img`
  margin: 0px 10px;
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
