import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import App from './App';
import history from './history';
import rootReducer from './redux/rootReducer';

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk)),
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      {/*Plain Router to replace BrowserRouter*/}
      <Router history={history}>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.querySelector('#root'),
);
