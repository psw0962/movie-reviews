import React from 'react';
import styled from 'styled-components';
import * as Font from '../common/Font';

const MovieCard = ({ value }) => {
  return (
    <MovieCardBox key={value.id}>
      <Wrapper>
        <ImgBox src={`https://image.tmdb.org/t/p/w200${value.poster_path}`} />

        <FontSize15 style={{ fontWeight: 'bold', width: '70%' }}>{value.title}</FontSize15>
        <FontSize15>{value.release_date}</FontSize15>
        <FontSize15>평균 별점 : {value.vote_average}</FontSize15>
      </Wrapper>
    </MovieCardBox>
  );
};

export default MovieCard;

// Font
const FontSize15 = styled(Font.FontSize15)`
  display: block;
  font-weight: 400;
  margin-top: 7px;
  text-align: center;
`;

// Box
const MovieCardBox = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  cursor: pointer;

  :hover {
    transform: scale(1.1);
    transition: ease-in-out 0.3s;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 200px;
  height: 400px;
`;

const ImgBox = styled.img`
  width: 200px;
  height: 300px;
  border-radius: 10px;

  :hover {
    box-shadow: 1px 1px 10px;
  }

  @media screen and (max-width: 768px) {
    width: 150px;
    height: 200px;
  }

  @media screen and (max-width: 475px) {
    width: 130px;
    height: 150px;
  }

  @media screen and (max-width: 400px) {
    width: 115px;
    height: 150px;
  }
`;
