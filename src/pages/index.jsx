import React, { useEffect } from 'react';
import styled from 'styled-components';
import AppLayout from '../templates/AppLayout';
import MovieCard from '../components/Movie/MovieCard';
import * as Font from '../components/common/Font';

import { useDispatch, useSelector } from 'react-redux';
import { LOADMOVIE_REQUEST } from '../reducers/movie';

const Home = () => {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.movie);

  useEffect(() => {
    dispatch({
      type: LOADMOVIE_REQUEST,
    });
  }, []);

  return (
    <>
      <AppLayout>
        <div style={{ display: 'flex', flexDirection: 'column', width: '79%' }}>
          <FontSize22>인기영화 TOP20</FontSize22>

          <PopularBox>
            {data[0] &&
              data[0].map((value, idx) => {
                return <MovieCard key={idx} value={value} />;
              })}
          </PopularBox>
        </div>
      </AppLayout>
    </>
  );
};

export default Home;

// Font
const FontSize22 = styled(Font.FontSize22)`
  font-weight: bold;
`;

const PopularBox = styled.div`
  display: flex;
  gap: 20px;
  overflow: scroll;
`;
