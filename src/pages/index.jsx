import React, { useEffect } from 'react';
import styled from 'styled-components';
import AppLayout from '../templates/AppLayout';
import MovieCard from '../components/Movie/MovieCard';
import * as Font from '../components/common/Font';
import Slider from 'react-slick';

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
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <AppLayout>
        <div style={{ display: 'flex', flexDirection: 'column', padding: '5%' }}>
          <FontSize22>인기영화 TOP20</FontSize22>

          <CustomSlider {...settings}>
            {data[0] &&
              data[0].map((value, idx) => {
                return <MovieCard key={idx} value={value} />;
              })}
          </CustomSlider>
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

const CustomSlider = styled(Slider)`
  .slick-prev:before,
  .slick-next:before {
    color: #404040;
  }
`;
