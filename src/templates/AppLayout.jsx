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

      <div>
        <Header>
          <Container>
            <div>
              <FontSize25 onClick={() => router.push('/')}>영화리뷰</FontSize25>
            </div>

            <InnerBox>
              <FontSize25 onClick={() => router.push('/wishlist')}>찜 목록</FontSize25>
              <FontSize25 onClick={() => router.push('/watchedlist')}>시청 목록</FontSize25>
            </InnerBox>
          </Container>
        </Header>

        <div>{children}</div>
      </div>
    </>
  );
};

export default AppLayout;

const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #042541;
  height: 60px;
  padding: 0px 20px;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;

  width: 1200px;
`;

const InnerBox = styled.div`
  display: flex;
  gap: 50px;
`;

const FontSize25 = styled(Font.FontSize25)`
  font-size: 2.5rem;
  color: white;
  font-weight: 400;
  cursor: pointer;
`;
