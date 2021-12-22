import axios from 'axios';
import { all, fork, call, put, takeLatest } from '@redux-saga/core/effects';
import {
  GETPOPULAR_REQUEST,
  GETPOPULAR_SUCCESS,
  GETPOPULAR_FAILURE,
  GETTOPRATED_REQUEST,
  GETTOPRATED_SUCCESS,
  GETTOPRATED_FAILURE,
  SEARCHMOVIE_REQUEST,
  SEARCHMOVIE_SUCCESS,
  SEARCHMOVIE_FAILURE,
} from '../reducers/movie';
import { TMDB_KEY } from '../config';

const getTopRatedMovie = `https://api.themoviedb.org/3/movie/top_rated?api_key=${TMDB_KEY}&language=ko&page=1`;
const getPopularMovie = `https://api.themoviedb.org/3/movie/popular?api_key=${TMDB_KEY}&language=ko&page=1`;

// loadmovie
function getPopularAPI() {
  return axios.get(getPopularMovie);
}

function* getPopular() {
  try {
    const result = yield call(getPopularAPI);
    yield put({
      type: GETPOPULAR_SUCCESS,
      data: result.data.results,
    });
  } catch (err) {
    console.log(err);
    yield put({
      type: GETPOPULAR_FAILURE,
      data: err.response.data,
    });
  }
}

// gettoprated
function getTopRatedAPI() {
  return axios.get(getTopRatedMovie);
}

function* getTopRated() {
  try {
    const result = yield call(getTopRatedAPI);
    yield put({
      type: GETTOPRATED_SUCCESS,
      data: result.data.results,
    });
  } catch (err) {
    console.log(err);
    yield put({
      type: GETTOPRATED_FAILURE,
      data: err.response.data,
    });
  }
}

// searchmovie
function searchMovieAPI(data) {
  // console.log(data);
  const searchMovie = `https://api.themoviedb.org/3/search/movie?api_key=${TMDB_KEY}&language=en-US&page=1&include_adult=false&query=${data.text}`;
  return axios.get(searchMovie);
}

function* searchMovie(action) {
  try {
    const result = yield call(searchMovieAPI, action.data);
    yield put({
      type: SEARCHMOVIE_SUCCESS,
      data: result.data.results,
    });
  } catch (err) {
    console.log(err);
    yield put({
      type: SEARCHMOVIE_FAILURE,
      data: err.response.data,
    });
  }
}

// take
function* watchGetPopualr() {
  yield takeLatest(GETPOPULAR_REQUEST, getPopular);
}

function* watchGetTopRated() {
  yield takeLatest(GETTOPRATED_REQUEST, getTopRated);
}

function* watchSearchMovie() {
  yield takeLatest(SEARCHMOVIE_REQUEST, searchMovie);
}

// all
export default function* movieSaga() {
  yield all([fork(watchGetPopualr), fork(watchGetTopRated), fork(watchSearchMovie)]);
}
