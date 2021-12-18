import React from 'react';
import styled from 'styled-components';
import * as Font from '../common/Font';

const MovieCard = ({ value }) => {
  return (
    <MovieCardBox key={value.id}>
      <div>
        <ImgBox src={`https://image.tmdb.org/t/p/w200${value.poster_path}`} />

        <FontSize15>{value.title}</FontSize15>
        <FontSize15>{value.release_date}</FontSize15>
        <FontSize15>평균 별점 : {value.vote_average}</FontSize15>
      </div>
    </MovieCardBox>
  );
};

export default MovieCard;

// Font
const FontSize15 = styled(Font.FontSize15)`
  display: block;
  font-weight: 400;
  margin-top: 5px;
  text-align: center;
`;

// Box
const MovieCardBox = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const ImgBox = styled.img`
  width: 200px;
  height: 300px;
  border-radius: 10px;
`;
