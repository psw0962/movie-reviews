import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AppLayout from '../templates/AppLayout';
import { LOADMOVIE_REQUEST } from '../reducers/movie';

const Home = () => {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.movie);

  useEffect(() => {
    console.log('effect');
    // dispatch({
    //   type: LOADMOVIE_REQUEST,
    // });
    // console.log(data);
  }, []);

  return (
    <AppLayout>
      <div>home</div>
    </AppLayout>
  );
};

export default Home;
