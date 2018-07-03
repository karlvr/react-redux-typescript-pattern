import * as React from 'react'
import { Provider } from 'react-redux'

import { store } from 'root/index'

import './App.css'

import './App.css'
import Example from 'template/containers/Example'

const logo = require('./logo.svg')

class App extends React.Component {
	render() {
		return (
			<Provider store={store}>
				<div className="App">
					<div className="App-header">
						<img src={logo} className="App-logo" alt="logo" />
						<h2>Welcome to React</h2>
					</div>
					<Example />
				</div>
			</Provider>
		)
	}
}

export default App
