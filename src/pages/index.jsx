import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AppLayout from '../templates/AppLayout';
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
        <div>
          {data[0] &&
            data[0].map((v, idx) => {
              return (
                <>
                  <div key={idx}>{v.title}</div>
                  <img src={`https://image.tmdb.org/t/p/w200${v.poster_path}`} />
                </>
              );
            })}
        </div>
      </AppLayout>
    </>
  );
};

export default Home;
