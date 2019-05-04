import rootReducer from '@Reducers/rootReducer';
import rootSaga from '@Saga/rootSaga';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reduxSaga from 'redux-saga';

const composeEnhancers: any = composeWithDevTools({});

const sagaMiddleware = reduxSaga();

const store = createStore(
  combineReducers(rootReducer),
  composeEnhancers(applyMiddleware(sagaMiddleware)),
);
sagaMiddleware.run(rootSaga);

export default store;
