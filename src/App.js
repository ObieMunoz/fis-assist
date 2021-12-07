import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

//pages and components
import Landing from './pages/landing/Landing'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'

import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Sidebar />
        <Navbar />
        <Switch>
          <Route exact path='/'>

          </Route>
        </Switch>
      </BrowserRouter>                                                                                                                                                         
    </div>
  );
}

export default App;
