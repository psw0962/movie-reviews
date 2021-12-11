import axios from 'axios';
import { all, fork, call, put, takeLatest } from '@redux-saga/core/effects';
import { LOADMOVIE_REQUEST, LOADMOVIE_SUCCESS, LOADMOVIE_FAILURE } from '../reducers/movie';
import { TMDB_KEY } from '../config';

const getPopularMovie = `https://api.themoviedb.org/3/movie/top_rated?api_key=${TMDB_KEY}&language=en-US&page=1`;

// login
function loadMovieAPI() {
  return axios.get(getPopularMovie);
}

function* loadMovie() {
  try {
    const result = yield call(loadMovieAPI);
    console.log(result.data.results);
    yield put({
      type: LOADMOVIE_SUCCESS,
      data: result.data.results,
    });
  } catch (err) {
    console.err(err);
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
