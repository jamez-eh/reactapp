import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux'
import spfyApp from './reducers'
import createBrowserHistory from 'history/createBrowserHistory'
import App from './containers/App';
import './index.css';
import WebFontLoader from 'webfontloader';
// for Snackbar / Material-Ui
import injectTapEventPlugin from 'react-tap-event-plugin';
// BootstrapTable
import 'bootstrap/dist/css/bootstrap.css';
import './react-bootstrap-table.min.css';

// Snackbar
injectTapEventPlugin();

WebFontLoader.load({
  google: {
    families: ['Roboto:300,400,500,700', 'Material Icons'],
  },
});

let store = createStore(spfyApp, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
const history = createBrowserHistory()

render(
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);
