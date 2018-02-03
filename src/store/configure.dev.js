import { createStore } from 'redux';
import rootReducer from '../reducers';
import { DevTools } from '../containers';

const configureStore = (preloadedState) => {
  const store = createStore(
    rootReducer,
    preloadedState,
    DevTools.instrument(),
  );

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      store.replaceReducer(rootReducer);
    });
  }

  return store;
};

export default configureStore;
