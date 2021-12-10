import React from 'react';
import axios from 'axios';
import { TMDB_KEY } from '../config';
import AppLayout from '../components/AppLayout';
import GlobalStyle from '../styles/GlobalStyle';

const Home = () => {
  const testReq = async () => {
    const req = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=${TMDB_KEY}&language=en-US&page=1&include_adult=false&query=harry potter`
    );
    console.log(req.data);
  };

  testReq();

  return (
    <AppLayout>
      <div>home</div>
    </AppLayout>
  );
};

export default Home;
