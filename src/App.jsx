import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import RouterApp from './routes/index.';
import { theme } from './theme';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { BrowserRouter } from 'react-router-dom';
function App() {
	return (
		<Provider store={store}>
			<BrowserRouter>
				<ThemeProvider theme={theme}>
					<CssBaseline />
					<RouterApp />
				</ThemeProvider>
			</BrowserRouter>
		</Provider>
	);
}

export default App;
