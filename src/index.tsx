import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import * as store from './mobx';
import Routes from './routes';
import { createBrowserHistory } from 'history';
import { Provider } from 'mobx-react';
import { router } from './mobx/';
import { Router } from 'react-router-dom';
import { syncHistoryWithStore } from 'mobx-react-router';
import './index.css';
import 'semantic-ui-css/semantic.min.css';
import './plugins/sentry.plugins';

const rootElement = document.getElementById('root');
const browserHistory = createBrowserHistory();

const history = syncHistoryWithStore(browserHistory, router);

ReactDOM.render(
  <React.StrictMode>
    <Provider {...store}>
      <Router history={history}>      
          <Routes />        
      </Router>
    </Provider>
  </React.StrictMode>,
  rootElement
);
serviceWorker.register();