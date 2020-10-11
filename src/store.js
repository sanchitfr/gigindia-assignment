import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './redux/reducers';
import { loadState, saveState } from './localStorage';
// const initialState = {};

const presistedState = loadState();

const middleware = [thunk];

const store = createStore(
    rootReducer, presistedState, composeWithDevTools(applyMiddleware(...middleware))
);

store.subscribe(() => {
    saveState(store.getState());
});

export default store;