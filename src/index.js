import React from 'react';
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import injectTapEventPlugin from 'react-tap-event-plugin'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import store from './redux'
import main from './pages'
import login from './pages/login'
import home from './pages/home'
import tasks from './pages/tasks'
import posttask from './pages/post-task'

const history = syncHistoryWithStore(browserHistory, store)

injectTapEventPlugin()
const muiTheme = getMuiTheme({
	fontFamily: 'PT Sans, sans-serif',
	palette: {
		primary1Color: '#51af33',
		textColor: '#767676'
	},
	appBar: {
		height: 50,
	},
});

const root = document.getElementById('root')

render(
<MuiThemeProvider muiTheme={muiTheme}>
	<Provider store={store}>
		<Router history={history}>
			<Route path="/" component={main}>
				<IndexRoute component={home}></IndexRoute>
				<Route path="/login" component={login}></Route>
				<Route path="/tasks" component={tasks}></Route>
				<Route path="/post-task" component={posttask}></Route>
			</Route>
		</Router>
	</Provider>
</MuiThemeProvider>
, root)
