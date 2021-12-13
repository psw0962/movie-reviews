import axios from 'axios';
import { all, fork, call, put, takeLatest } from '@redux-saga/core/effects';
import { LOADMOVIE_REQUEST, LOADMOVIE_SUCCESS, LOADMOVIE_FAILURE } from '../reducers/movie';
import { TMDB_KEY } from '../config';

const getTopRatedMovie = `https://api.themoviedb.org/3/movie/top_rated?api_key=${TMDB_KEY}&language=ko&page=1`;
const getPopularMovie = `https://api.themoviedb.org/3/movie/popular?api_key=${TMDB_KEY}&language=ko&page=1`;
const searchMovie = `https://api.themoviedb.org/3/search/movie?api_key=${TMDB_KEY}&language=en-US&page=1&include_adult=false&query=harry`;

// loadmovie
function loadMovieAPI() {
  return axios.get(getPopularMovie);
}

function* loadMovie() {
  try {
    const result = yield call(loadMovieAPI);
    yield put({
      type: LOADMOVIE_SUCCESS,
      data: result.data.results,
    });
  } catch (err) {
    console.log(err);
    yield put({
      type: LOADMOVIE_FAILURE,
      data: err.response.data,
    });
  }
}

// take
function* watchLoadMovie() {
  yield takeLatest(LOADMOVIE_REQUEST, loadMovie);
}

// all
export default function* movieSaga() {
  yield all([fork(watchLoadMovie)]);
}
