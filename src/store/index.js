import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import reducer from '../reducers';
import mySaga from '../sagas';

//create saga middleware
const sagaMiddleware = createSagaMiddleware();

//mount it to store
export default createStore(reducer, applyMiddleware(sagaMiddleware));

//then run the saga
sagaMiddleware.run(mySaga);
