import React from 'react'
import logo from './logo.svg'
import './App.css'
import Example from 'modules/example/components/Example'
import { Provider } from 'react-redux'
import { getStore } from 'modules/root'

const App: React.FC = () => {
	return (
		<Provider store={getStore()}>
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<p>
					Edit <code>src/App.tsx</code> and save to reload.
					</p>
					<a
						className="App-link"
						href="https://reactjs.org"
						target="_blank"
						rel="noopener noreferrer"
					>
					Learn React
					</a>
					<Example />
				</header>
			</div>
		</Provider>
	)
}

export default App
