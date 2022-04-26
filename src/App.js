import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import history from './utils/history';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Router from './routes/Router'
import  'bootstrap/dist/css/bootstrap.min.css' ; 
import 'bootstrap-icons/font/bootstrap-icons.css'
import './App.css'
class App extends Component {
	render() {
		return (
			<Container fluid>
				<Row>
					<Col className="p-0">
					<BrowserRouter history={history} >
						<Routes>
								<Route path="/*"  element={<Router />}/>	
						</Routes>
					</BrowserRouter>
					</Col>
				</Row>
				
			</Container>
		);
	}
}

export default App;