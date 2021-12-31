import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import AppLayout from '../templates/AppLayout';
import MovieCard from '../components/Movie/MovieCard';
import * as Font from '../components/common/Font';
import { Wrapper } from '../components/common/Wrapper';

import { useDispatch, useSelector } from 'react-redux';
import { GETPOPULAR_REQUEST, GETTOPRATED_REQUEST } from '../reducers/movie';

const Home = () => {
  const dispatch = useDispatch();
  const { getPopularData, getTopRatedData, getPopularLoading } = useSelector((state) => state.movie);

  useEffect(() => {
    dispatch({
      type: GETPOPULAR_REQUEST,
    });

    dispatch({
      type: GETTOPRATED_REQUEST,
    });
  }, []);

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          dots: true,
          infinite: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          initialSlide: 3,
          infinite: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: false,
        },
      },
    ],
  };

  return (
    <AppLayout>
      {!getPopularLoading ? (
        <Wrapper>
          <FontSize22>인기영화 TOP20</FontSize22>
          <CustomSlider {...settings}>
            {getPopularData[0] &&
              getPopularData[0].map((value, idx) => {
                return <MovieCard key={idx} value={value} />;
              })}
          </CustomSlider>

          <FontSize22 style={{ marginTop: 60 }}>높은 별점 순</FontSize22>
          <CustomSlider {...settings}>
            {getTopRatedData[0] &&
              getTopRatedData[0].map((value, idx) => {
                return <MovieCard key={idx} value={value} />;
              })}
          </CustomSlider>
        </Wrapper>
      ) : (
        <div>loading...</div>
      )}
    </AppLayout>
  );
};

export default Home;

// Font
const FontSize22 = styled(Font.FontSize22)`
  font-weight: bold;
`;

const CustomSlider = styled(Slider)`
  .slick-prev:before,
  .slick-next:before {
    color: #404040;
  }
`;
