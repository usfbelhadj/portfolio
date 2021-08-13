import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/Header'
import Main from './components/Main'
import Work from './components/Work'

import Particles from 'react-particles-js';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
function App() {
  return (
	  <Router>
    <div>
      <div className="the-wrapper">
    
	<Switch>
			<Route path="/" exact component={Header}>
			<Header/>
			</Route>
		</Switch>
      <Particles
    params={{
	    "particles": {
	        "number": {
	            "value": 50
	        },
	        "size": {
	            "value": 2
	        }
	    },
	    "interactivity": {
	        "events": {
	            "onhover": {
	                "enable": true,
	                "mode": "repulse"
	            }
	        }
	    }
	}} />
  </div>

				< Main/>

		<Work/>
    </div>
	</Router>
  );
}

export default App;
