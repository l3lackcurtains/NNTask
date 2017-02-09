import React from 'react';
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import injectTapEventPlugin from 'react-tap-event-plugin'
import store from './redux'
import main from './pages'
import login from './pages/login'
import home from './pages/home'
import tasks from './pages/tasks'

const history = syncHistoryWithStore(browserHistory, store)

injectTapEventPlugin()

const root = document.getElementById('root')

render(
<MuiThemeProvider>
	<Provider store={store}>
		<Router history={history}>
			<Route path="/" component={main}>
				<IndexRoute component={home}></IndexRoute>
				<Route path="/login" component={login}></Route>
				<Route path="/tasks" component={tasks}></Route>
			</Route>
		</Router>
	</Provider>
</MuiThemeProvider>
, root)
