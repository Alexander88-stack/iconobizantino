import React, { Component } from 'react'
import { NavBar } from './components/nav-bar/nav-bar'

interface AppState {
	activeComponent: JSX.Element
}

interface AppProps {}

const components = [
	<div>Home Page</div>,
	<div>Shop</div>,
	<div>Contact</div>,
	<div>Glosario</div>,
	<div>Chart</div>,
]

export class App extends Component<AppProps, AppState> {
	constructor( props ) {
		super( props )
		this.state = {
			activeComponent: <div></div>
		}
	}
	
	menuHasBeenClicked( menuId ) {

		this.setState({
			activeComponent: components[ menuId ]
		})
	}

 	render() {
		const { activeComponent } = this.state 

		return (
			<div className="app">
				<NavBar onMenuClicked={ (menuId) => this.menuHasBeenClicked( menuId ) }/>
				{ activeComponent }
			</div>
		)		
	}
}
