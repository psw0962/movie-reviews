import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

const Search = () => {
  const { searchMovieData } = useSelector((state) => state.movie);

  return (
    <div>
      {searchMovieData[0].map((v) => {
        return (
          <div>
            <ImgBox src={`https://image.tmdb.org/t/p/w200${v.poster_path}`} />
          </div>
        );
      })}
    </div>
  );
};

export default Search;

const ImgBox = styled.img`
  width: 200px;
  height: 300px;
  border-radius: 10px;

  :hover {
    box-shadow: 1px 1px 10px;
  }
`;
