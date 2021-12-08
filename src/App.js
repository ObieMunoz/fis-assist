import { BrowserRouter, Route, Switch } from 'react-router-dom';

//pages and components
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Create from './pages/create/Create'
import Dashboard from './pages/dashboard/Dashboard';
import Detail from './pages/details/Detail';

import './App.css';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Sidebar />
        <div className="container">
        <Navbar />
        <Switch>
          <Route exact path='/'>
            <Dashboard />
          </Route>
          <Route path='/create'>
            <Create />
          </Route>
          <Route path='/details/:id'>
            <Detail />
          </Route>
        </Switch>
        </div>
      </BrowserRouter>                                                                                                                                                         
    </div>
  );
}

export default App;
