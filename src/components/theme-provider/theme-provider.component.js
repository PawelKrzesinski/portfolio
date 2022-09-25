import React, { useState } from 'react'

export const ThemeContext = React.createContext({})

export const ThemeContextProvider = props => {

	const theme = {
		light: {
			type: 'light',
			primary: '#d3d3d3',
			secondary: '#c0c0c0',
			tetriary: '#000000',
			navbar: 'rgba(245, 245, 245, 0.8)',
			boxShadow: '0px 0px 5px #000000',
      inputBorder: 'rgba(15, 15, 15, 0.3)',
		},
		dark: {
			type: 'dark',
			primary: 'rgb(25, 25, 25)',
			secondary: 'rgb(35, 35, 35)',
			tetriary: '#00d8ff',
			quaternary: '#faebd7',
			navbar: 'rgba(10, 10, 10, 0.8)',
			boxShadow: '0px 0px 5px #00d8ff',
      inputBorder: 'rgba(0, 216, 255, 0.3)',
		},
	}
	
	const setTheme = type => {
		setState({...state, theme: type === 'dark' ? theme.light : theme.dark})
	}
	const initState = {
		theme: theme.dark,
		setTheme: setTheme
	}
	const [state, setState] = useState(initState)
	
	return (
		<ThemeContext.Provider value={state}>
			{props.children}
		</ThemeContext.Provider>
	)
}
