import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import AppLayout from '../../templates/AppLayout';
import { TMDB_KEY } from '../../config';

const MovieDetail = () => {
  const [detailData, setDetailData] = useState(null);
  const router = useRouter();
  const { id } = router.query;
  const test = `https://api.themoviedb.org/3/movie/${id}?api_key=${TMDB_KEY}&language=ko`;

  const getDetailMovieDataAPI = async () => {
    try {
      const result = await axios.get(test);
      setDetailData(result.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getDetailMovieDataAPI();
  }, []);

  console.log('qweqweqwe', detailData);
  return (
    <AppLayout>
      {detailData !== null && <img src={`https://image.tmdb.org/t/p/w200${detailData.poster_path}`} />}
    </AppLayout>
  );
};

export default MovieDetail;
