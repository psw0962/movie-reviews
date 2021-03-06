import produce from 'immer';

export const initialState = {
  getPopularData: [],
  getTopRatedData: [],
  searchMovieData: [],

  // getPopular
  getPopularLoading: false,
  getPopularDone: false,
  getPopularError: null,

  // gettoprated
  getTopRatedLoading: false,
  getTopRatedDone: false,
  getTopRatedError: null,

  // searchmovie
  searchmovieLoading: false,
  searchmovieDone: false,
  searchmovieError: null,
};

export const GETPOPULAR_REQUEST = 'GETPOPULAR_REQUEST';
export const GETPOPULAR_SUCCESS = 'GETPOPULAR_SUCCESS';
export const GETPOPULAR_FAILURE = 'GETPOPULAR_FAILURE';

export const GETTOPRATED_REQUEST = 'GETTOPRATED_REQUEST';
export const GETTOPRATED_SUCCESS = 'GETTOPRATED_SUCCESS';
export const GETTOPRATED_FAILURE = 'GETTOPRATED_FAILURE';

export const SEARCHMOVIE_REQUEST = 'SEARCHMOVIE_REQUEST';
export const SEARCHMOVIE_SUCCESS = 'SEARCHMOVIE_SUCCESS';
export const SEARCHMOVIE_FAILURE = 'SEARCHMOVIE_FAILURE';

const reducer = (state = initialState, action) => {
  return produce(state, (draft) => {
    switch (action.type) {
      // getPopualr
      case GETPOPULAR_REQUEST:
        draft.getPopualrLoading = true;
        draft.getPopualrDone = null;
        draft.getPopualrError = false;
        break;

      case GETPOPULAR_SUCCESS:
        draft.getPopualrLoading = false;
        draft.getPopualrDone = true;
        draft.getPopularData.push(action.data);
        break;

      case GETPOPULAR_FAILURE:
        draft.getPopualrLoading = false;
        draft.getPopualrError = action.error;
        break;

      // getTopRated
      case GETTOPRATED_REQUEST:
        draft.getTopRatedLoading = true;
        draft.getTopRatedDone = null;
        draft.getTopRatedError = false;
        break;

      case GETTOPRATED_SUCCESS:
        draft.getTopRatedLoading = false;
        draft.getTopRatedDone = true;
        draft.getTopRatedData.push(action.data);
        break;

      case GETTOPRATED_FAILURE:
        draft.getTopRatedLoading = false;
        draft.getTopRatedError = action.error;
        break;

      // searchmovie
      case SEARCHMOVIE_REQUEST:
        draft.searchmovieLoading = true;
        draft.searchmovieDone = null;
        draft.searchmovieError = false;
        break;

      case SEARCHMOVIE_SUCCESS:
        draft.searchMovieLoading = false;
        draft.searchMovieDone = true;
        draft.searchMovieData = [];
        draft.searchMovieData.push(action.data);
        break;

      case SEARCHMOVIE_FAILURE:
        draft.searchmovieLoading = false;
        draft.searchmovieError = action.error;
        break;

      default:
        break;
    }
  });
};

export default reducer;
