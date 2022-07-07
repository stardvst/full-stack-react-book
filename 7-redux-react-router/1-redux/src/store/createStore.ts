import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from './AppState';

const createStore = () => {
  return configureStore({ reducer: rootReducer });
};

export default createStore;
