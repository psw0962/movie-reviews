import produce from 'immer';

export const initialState = {
  data: [],

  // loadmovie
  loadMovieLoading: false,
  loadMovieDone: false,
  loadMovieError: null,
};

export const LOADMOVIE_REQUEST = 'LOADMOVIE_REQUEST';
export const LOADMOVIE_SUCCESS = 'LOADMOVIE_SUCCESS';
export const LOADMOVIE_FAILURE = 'LOADMOVIE_FAILURE';

const reducer = (state = initialState, action) => {
  return produce(state, (draft) => {
    switch (action.type) {
      // loadmovie
      case LOADMOVIE_REQUEST:
        draft.loadMovieLoading = true;
        draft.loadMovieDone = null;
        draft.loadMovieError = false;
        break;

      case LOADMOVIE_SUCCESS:
        draft.loadMovieLoading = false;
        draft.loadMovieDone = true;
        draft.data.push(action.data);
        break;

      case LOADMOVIE_FAILURE:
        draft.loadMovieLoading = false;
        draft.loadMovieError = action.error;
        break;

      default:
        break;
    }
  });
};

export default reducer;
