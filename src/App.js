import React, { Component } from 'react';
import { Container} from 'react-bootstrap';
import history from './utils/history';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Router from './routes/Router'
import  'bootstrap/dist/css/bootstrap.min.css' ; 
import 'bootstrap-icons/font/bootstrap-icons.css'
import './App.scss'
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
class App extends Component {
	render() {
		return (
			<Container fluid className="p-0"  style={{'backgroundColor':'greenyellow'}}>
			
					<BrowserRouter history={history} >
						<Routes>
							
								<Route path="/*"  element={<Router/>}/>	
						</Routes>
					</BrowserRouter>
				
		
			</Container>

		);
	}
}

export default App;