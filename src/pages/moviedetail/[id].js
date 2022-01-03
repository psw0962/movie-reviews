import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import axios from 'axios';
import AppLayout from '../../templates/AppLayout';
import * as Font from '../../components/common/Font';
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
    // 최초 렌더링 시 api호출
    getDetailMovieDataAPI();

    // 새로고침 시 데이터유지(로컬스토리지 사용)
    if (typeof window !== undefined) {
      const storedValue = localStorage.getItem('detailData');
      setDetailData(JSON.parse(storedValue));
    }
  }, []);

  // detailData가 바뀔 때 마다 로컬스토리지에 데이터 저장
  useEffect(() => {
    window.localStorage.setItem('detailData', JSON.stringify(detailData));
  }, [detailData]);

  return (
    <AppLayout>
      {detailData && (
        <Wrapper>
          <img src={`https://image.tmdb.org/t/p/w200${detailData.poster_path}`} />
          <FontSize22>{detailData.title}</FontSize22>
        </Wrapper>
      )}
    </AppLayout>
  );
};

export default MovieDetail;

const FontSize22 = styled(Font.FontSize22)``;

const Wrapper = styled.div`
  display: flex;
`;
