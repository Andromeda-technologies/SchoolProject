
import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from 'history';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import store from './store';
import { Provider } from 'react-redux';
// core components
import Admin from 'layouts/Admin.js';
import RTL from 'layouts/RTL.js';

import 'assets/css/material-dashboard-react.css?v=1.8.0';
import UpdateStudent from 'views/Student/UpdateStudent';

const hist = createBrowserHistory();

ReactDOM.render(
	<Provider store={store}>
		<Router history={hist}>
			<Switch>
				<Route path="/admin" component={Admin} />
				<Route path="/rtl" component={RTL} />
        <Route exact path="/update/student/:id" component={UpdateStudent} />
				<Redirect from="/" to="/admin/dashboard" />
			</Switch>
		</Router>
	</Provider>,
	document.getElementById('root')
);
