import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import AppLayout from '../../templates/AppLayout';
import MovieCard from '../../components/Movie/MovieCard';

const Search = () => {
  const { searchMovieData } = useSelector((state) => state.movie);
  return (
    <AppLayout>
      <Wrapper>
        {searchMovieData[0] && searchMovieData[0].length !== 0 ? (
          searchMovieData[0].map((v) => {
            return <MovieCard key={v.id} value={v} />;
          })
        ) : (
          <div>검색결과가 없습니다.</div>
        )}
      </Wrapper>
    </AppLayout>
  );
};

export default Search;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 30px;
`;
