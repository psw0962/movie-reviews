import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import AppLayout from '../../templates/AppLayout';
import MovieCard from '../../components/Movie/MovieCard';
import Link from 'next/link';

const Search = () => {
  const { searchMovieData, getPopularLoading } = useSelector((state) => state.movie);
  return (
    <AppLayout>
      {!getPopularLoading ? (
        <Wrapper>
          {searchMovieData[0] && searchMovieData[0].length !== 0 ? (
            searchMovieData[0].map((value) => {
              return (
                <Link key={value.id} href={`/moviedetail/${value.id}`}>
                  <CustomAnchor>
                    <MovieCard value={value} />
                  </CustomAnchor>
                </Link>
              );
            })
          ) : (
            <div>검색결과가 없습니다.</div>
          )}
        </Wrapper>
      ) : (
        <div>loading...</div>
      )}
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

const CustomAnchor = styled.a`
  text-decoration: none;
  color: inherit;
`;
