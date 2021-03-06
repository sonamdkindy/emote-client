import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';

export default function configStore(initialState) {
    const store = createStore(rootReducer, applyMiddleware(thunk));

    return store;
}
