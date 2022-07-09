import { combineReducers } from 'redux';
import { postReducer } from './PostReducer';
import { userReducer } from './UserReducer';

export const rootReducer = combineReducers({
  user: userReducer,
  post: postReducer,
});

export type AppState = ReturnType<typeof rootReducer>;
