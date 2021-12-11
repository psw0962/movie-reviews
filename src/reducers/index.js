import { HYDRATE } from 'next-redux-wrapper';
import { combineReducers } from 'redux';

import movie from './movie';

// const rootReducer = combineReducers({
//   index: (state = {}, action) => {
//     switch (action.type) {
//       case HYDRATE:
//         console.log('HYDRATE', action);
//         return { ...state, ...action.padload };

//       default:
//         return state;
//     }
//   },

//   movie,
// });

const rootReducer = (state, action) => {
  switch (action.type) {
    case HYDRATE:
      console.log('HYDRATE', action);
      return action.payload;

    default: {
      const combineReducer = combineReducers({
        movie,
      });
      return combineReducer(state, action);
    }
  }
};

export default rootReducer;
