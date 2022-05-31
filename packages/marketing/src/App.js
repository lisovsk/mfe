import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { createGenerateClassName, StylesProvider } from '@material-ui/core/styles';

import Landing from './components/Landing';
import Pricing from './components/Pricing';

const generateClassName = createGenerateClassName({
	productionPrefix: 'ma'
});

export default () => {
	return (
		<div>
			<StylesProvider generateClassName={generateClassName}>
				<BrowserRouter>
					<Switch>
						<Route exec path="/pricing" component={Pricing}></Route>
						<Route path="/" component={Landing}></Route>
					</Switch>
				</BrowserRouter>
			</StylesProvider>
		</div>
	)
}